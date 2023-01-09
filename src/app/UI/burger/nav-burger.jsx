import React from 'react';

const NavBurger = ({setActive ,active}) => (
  <div onClick={()=> {setActive(!active)}} role='presentation' className={active? 'nav__burger burger js-burger active' :'nav__burger burger js-burger'}>
    <span className='burger__line' />
    <span className='burger__line' />
    <span className='burger__line' />
  </div>
)

export default NavBurger;
