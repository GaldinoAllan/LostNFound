import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Items from '../pages/Items';
// import Locais from '../pages/Locais';
// import Cargos from '../pages/Cargos';
// import Categorias from '../pages/Categorias';
// import Usuarios from '../pages/Usuarios';

const EditorRoutes = () => (
  <Switch>
    <Route exact path='/editor' component={Items} />
    {/* <Route path='/locais' component={Locais} />
    <Route path='/cargos' component={Cargos} />
    <Route path='/categorias' component={Categorias} />
    <Route path='/usuarios' component={Usuarios} /> */}
    <Redirect from="*" to="/" />
  </Switch>
)

export default EditorRoutes