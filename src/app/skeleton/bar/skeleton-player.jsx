import React from 'react';


import PlayerController from '../../components/bar/player/controls/controls';
import Volume from '../../components/bar/player/volume/volume';

import SkeletonPlayerTrack from './skeleton-track';

const SkeletonPlayer = () => (
  <div className="bar__player-block">
    <div className="bar__player player">
      <PlayerController/>
      <SkeletonPlayerTrack/>
    </div>
    <Volume/>
  </div>
)

export default SkeletonPlayer;
