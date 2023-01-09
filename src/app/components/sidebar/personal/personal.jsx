import React from 'react';

const Personal = ({infoPersonal}) => {
  const {name, avatar} = infoPersonal;
  return(
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">{name}</p>
      <div className="sidebar__avatar">{avatar}</div>
    </div>
  )
}

export default Personal
