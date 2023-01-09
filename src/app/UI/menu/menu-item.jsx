import React from 'react';

const ItemMenu = ({body, src}) => (
  <li className='menu__item'>
    <a className='menu__link' href={src}>{body}</a>
  </li>
)

export default ItemMenu;
