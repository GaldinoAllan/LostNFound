import { Switch, Route, Redirect } from 'react-router';

import Landing from '../pages/Landing'
import FAQ from '../pages/FAQ'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Editor from '../pages/Editor'

const AppRoutes = () => (
  <Switch>
    <Route path='/' exact component={Landing} />
    <Route path='/faq' component={FAQ} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/editor' component={Editor} />
    <Redirect from="*" to="/" />
  </Switch>
)

export default AppRoutes