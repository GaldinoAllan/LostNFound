import React from 'react';

import {
  MenuArea,
  Menu,
  MenuLink
} from '../styles/components/Nav'

const Nav = () => (
  <MenuArea className="menu-area">
    <Menu>
      <MenuLink to="/editor/locais">
        Locais
      </MenuLink>
      <MenuLink to="/editor/cargos">
        Cargos
      </MenuLink>
      <MenuLink to="/editor/categorias">
        Categorias
      </MenuLink>
      <MenuLink to="/editor/usuarios">
        Usuarios
      </MenuLink>
      <MenuLink to="/editor/items">
        Itens
      </MenuLink>
    </Menu>
  </MenuArea>
)

export default Nav