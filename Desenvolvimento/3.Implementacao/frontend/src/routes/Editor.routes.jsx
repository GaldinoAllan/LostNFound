import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Items from '../pages/Items';
import Places from '../pages/Places';
import Positions from '../pages/Positions';
import Categories from '../pages/Categories';
import Users from '../pages/Users';

const EditorRoutes = () => (
  <Switch>
    <Route exact path='/editor' component={Items} />
    <Route path='/editor/locais' component={Places} />
    <Route path='/editor/cargos' component={Positions} />
    <Route path='/editor/categorias' component={Categories} />
    <Route path='/editor/usuarios' component={Users} />
    <Redirect from="*" to="/" />
  </Switch>
)

export default EditorRoutes