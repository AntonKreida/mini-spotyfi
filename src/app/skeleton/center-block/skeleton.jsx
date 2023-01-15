import React from 'react';

import Filter from '../../components/centerBlock/filter/filter';
import Search from '../../components/centerBlock/search/search';

import SkeletonContent from './skeleton-content';

const SkeletonCenterBlock = () => (
  <div className="main__center-block center-block">
    <Search/>
    <h2 className='center-block__title'>Треки</h2>
    <Filter/>
    <SkeletonContent/>
  </div>
)

export default SkeletonCenterBlock;
