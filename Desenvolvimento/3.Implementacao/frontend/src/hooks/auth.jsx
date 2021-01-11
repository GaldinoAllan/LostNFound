import { createContext, useCallback, useContext, useState } from 'react'
import api from '../server/api'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@LostNFound:token')
    const user = localStorage.getItem('@LostNFound:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {}
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@LostNFound:token', token)
    localStorage.setItem('@LostNFound:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@LostNFound:token')
    localStorage.removeItem('@LostNFound:user')

    setData({})
  }, [])

  return (
    <AuthContext.Provider value={{
      user: data.user,
      token: data.token,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }