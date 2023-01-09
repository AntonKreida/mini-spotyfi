import React, {useState} from 'react';

import NavBurger from '../../UI/burger/nav-burger';
import NavLogo from '../../UI/logo/logo';
import NavMenu from '../../UI/menu/nav-menu';

const NavBar = () => {
  const [MenuActive, setMenuActive] = useState(false);
  const listMenuItem = [{id: 1, body: 'Главное', src: '/'}, {id: 2, body: 'Мой плейлист',  src: '/'}, {id: 3, body: 'Войти',  src: '/'}]

  return(
    <nav className="main__nav nav">
      <NavLogo/>
      <NavBurger setActive={setMenuActive} active={MenuActive}/>
      <NavMenu items={listMenuItem}/>
    </nav>
  )
}

export default NavBar;
