import React from 'react';

import ItemOne from '../../../../assets/images/playlist01.png'
import ItemTwo from '../../../../assets/images/playlist02.png'
import ItemThree from '../../../../assets/images/playlist03.png'

const SidebarBlock = () => (
  <div className="sidebar__block">
    <div className="sidebar__list">
      <div className="sidebar__item">
        <a className='sidebar__link' href="/">
          <img className='sidebar__img' src={ItemOne} alt="Day's playlist" />
        </a>
      </div>
      <div className="sidebar__item">
        <a className='sidebar__link' href="/">
          <img className='sidebar__img' src={ItemTwo} alt="Day's playlist" />
        </a>
      </div>
      <div className="sidebar__item">
        <a className='sidebar__link' href="/">
          <img className='sidebar__img' src={ItemThree} alt="Day's playlist" />
        </a>
      </div>
    </div>
  </div>
)

export default SidebarBlock
