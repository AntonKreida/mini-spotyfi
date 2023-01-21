import React from 'react';

import Content from './content/content';
import Filters from './filter/filter';
import Search from './search/search';

const CenterBlock = ({tracks, onClickModal, active, refButton, onKeyDown}) => (
  <div className="main__center-block center-block">
    <Search/>
    <h2 className='center-block__title'>Треки</h2>
    <Filters 
      tracks={tracks} 
      onClickModal={onClickModal}
      onKeyDown={onKeyDown}
      active={active}
      refButton={refButton}/>
    <Content tracks={tracks}/>
  </div>

)

export default CenterBlock;
