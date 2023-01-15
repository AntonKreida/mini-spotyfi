import React from 'react';

import Progress from '../../components/bar/progress/progress';

import SkeletonPlayer from './skeleton-player';

const SkeletonBar = () => (
  <div className="bar">
    <div className="bar__container">
      <Progress/>
      <SkeletonPlayer/>
    </div>
  </div>
)

export default SkeletonBar;
