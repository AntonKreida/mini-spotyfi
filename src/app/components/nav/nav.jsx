import React, {useState} from 'react';


import NavBurger from '../../UI/burger/nav-burger';
import NavLogo from '../../UI/logo/logo';
import NavMenu from '../../UI/menu/nav-menu';

import styles from './nav.module.scss';


const NavBar = ({className}) => {
  const [MenuActive, setMenuActive] = useState(false);
  const listMenuItem = [{id: 1, body: 'Главное', src: '/'}, {id: 2, body: 'Мой плейлист',  src: '/'}, {id: 3, body: 'Войти',  src: '/'}]

  return(
    <nav className={className}>
      <NavLogo className={styles.logo}/>
      <NavBurger className={styles.burger} setActive={setMenuActive} active={MenuActive}/>
      <NavMenu className={styles.menu} items={listMenuItem} active={MenuActive}/>
    </nav>
  )
}

export default NavBar;
