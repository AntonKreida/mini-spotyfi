import React from 'react';


import PlayerController from './controls/controls';
import styles from './player.module.scss'
import PlayerTrack from './track/track';
import Volume from './volume/volume';

const Player = ({className}) => (
  <div className={className.player_block}>
    <div className={`${className.player}`}>
      <PlayerController/>
      <PlayerTrack className={styles.play}/>
    </div>
    <Volume className={className.volume_block}/>
  </div>
)

export default Player;
