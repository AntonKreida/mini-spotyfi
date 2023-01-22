import React, {useState} from 'react';

import SidebarBlock from './block/sidebar-block';
import Personal from './personal/personal';
import styles from './sidebar.module.scss';

const Sidebar = ({className}) => {
  const [personal, setPersonal] = useState({
    name: 'Anton Kreida',
    avatar: ''
  })
  return(
    <div className={className}>
      <Personal styles={styles} infoPersonal={personal}/>
      <SidebarBlock styles={styles}/>
    </div>
  )
}

export default Sidebar
