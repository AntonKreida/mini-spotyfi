import React from 'react';

import styles from './menu.module.scss';

const ItemMenu = ({body, src}) => (
  <li className={styles.item}>
    <a className={styles.link} href={src}>{body}</a>
  </li>
)

export default ItemMenu;
