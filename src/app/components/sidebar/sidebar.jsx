import React, {useState} from 'react';

import SidebarBlock from './block/sidebar-block';
import Personal from './personal/personal';

const Sidebar = () => {
  const [personal, setPersonal] = useState({
    name: 'Anton Kreida',
    avatar: ''
  })
  return(
    <div className="main__sidebar sidebar">
      <Personal infoPersonal={personal}/>
      <SidebarBlock/>
    </div>
  )
}

export default Sidebar
