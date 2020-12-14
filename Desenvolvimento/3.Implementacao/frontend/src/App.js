import Header from './components/Header'
import Footer from './components/Footer'

import AppRoutes from './routes/App.routes'

import GlobalStyle from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
