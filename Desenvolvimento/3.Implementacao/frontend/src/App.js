import Header from './components/Header'
import Footer from './components/Footer'

import AppRoutes from './routes/App.routes'

import GlobalStyle from './styles/globalStyles'

import { AuthProvider } from './hooks/auth'

const App = () => (
  <>
    <AuthProvider>
      <Header />
      <AppRoutes />
      <Footer />
    </AuthProvider>
    <GlobalStyle />
  </>
)

export default App
