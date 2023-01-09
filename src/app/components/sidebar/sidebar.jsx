import React, {useState} from 'react';

import SidebarBlock from './block/sidebar-block';
import Personal from './personal/personal';

const Sidebar = () => {
  const [personal, setPersonal] = useState({
    id: 1,
    name: 'Anton Kreida',
    avatar: ''
  })
  return(
    <div className="main__sidebar sidebar">
      <Personal key={personal.id} infoPersonal={personal}/>
      <SidebarBlock/>
    </div>
  )
}

export default Sidebar
