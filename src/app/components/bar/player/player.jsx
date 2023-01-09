import React from 'react';


import PlayerController from './controls/controls';
import PlayerTrack from './track/track';
import Volume from './volume/volume';

const Player = () => (
  <div className="bar__player-block">
    <div className="bar__player player">
      <PlayerController/>
      <PlayerTrack/>
    </div>
    <Volume/>
  </div>
)

export default Player;
