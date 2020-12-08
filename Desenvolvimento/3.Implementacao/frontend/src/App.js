import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Landing from './pages/Landing'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Register from './pages/Register'
import Editor from './pages/Editor'

import GlobalStyle from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/faq' component={FAQ} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/editor/itens' component={Editor} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  )
}

export default App
