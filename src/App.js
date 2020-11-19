import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Landing from './pages/Landing'

import GlobalStyle from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/' exact component={Landing} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
