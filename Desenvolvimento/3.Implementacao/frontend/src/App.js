import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Landing from './pages/Landing'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Register from './pages/Register'
// import Item from './pages/Item'

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
        {/* <Route path='/item' component={Item} />
        <Route path='/item/:id' component={Item} /> */}
      </Switch>
      <Footer />
    </>
  )
}

export default App
