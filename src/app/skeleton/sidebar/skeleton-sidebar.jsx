import React from 'react';

import SkeletonSidebarBlock from './skeleton-block';
import SkeletonPersonal from './skeleton-personal';

const SkeletonSidebar = () => (
  <div className="main__sidebar sidebar">
    <SkeletonPersonal/>
    <SkeletonSidebarBlock/>
  </div>
)
  
export default SkeletonSidebar
