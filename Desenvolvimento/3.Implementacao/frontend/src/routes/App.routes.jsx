
import { Switch, Route, Redirect } from 'react-router';

import { useAuth } from '../hooks/auth'

import Landing from '../pages/Landing'
import FAQ from '../pages/FAQ'
import Login from '../pages/Login'
import Editor from '../pages/Editor'

const AppRoutes = () => {
  const { user } = useAuth()

  return (
    <Switch>
      <Route path='/' exact component={Landing} />
      <Route path='/faq' component={FAQ} />
      <Route
        path='/login'
        render={({ location }) => {
          return !user ? (
            <Login />
          ) : (
              // <Redirect to={{ pathname: isPrivate ? '/login' : '/' }} />
              <Redirect to={{
                pathname: '/editor',
                state: { from: location }
              }} />
            )
        }}
      />
      <Route
        path='/editor'
        render={({ location }) => {
          return !!user ? (
            <Editor />
          ) : (
              // <Redirect to={{ pathname: isPrivate ? '/login' : '/' }} />
              <Redirect to={{
                pathname: '/',
                state: { from: location }
              }} />
            )
        }}
      />

      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default AppRoutes