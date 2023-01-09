import React from 'react';

import Content from './content/content';
import Filter from './filter/filter';
import Search from './search/search';

const CenterBlock = () => (
  <div className="main__center-block center-block">
    <Search/>
    <h2 className='center-block__title'>Треки</h2>
    <Filter/>
    <Content/>
  </div>
)

export default CenterBlock;
