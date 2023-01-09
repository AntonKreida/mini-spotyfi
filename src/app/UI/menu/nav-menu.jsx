import React from 'react';

import ItemMenu from './menu-item';

const NavMenu = ({items}) => (
  <div className="nav__menu menu">
    <ul className="menu__list">
      {items.map((item) => (
        <ItemMenu key={item.id} body={item.body} src={item.src}/>
      )
      )}
    </ul>
  </div>
)

export default NavMenu;
