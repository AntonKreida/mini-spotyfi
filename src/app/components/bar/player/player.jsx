import React from 'react';


import PlayerController from './controls/controls';
import styles from './player.module.scss'
import PlayerTrack from './track/track';
import Volume from './volume/volume';

const Player = (
  {
    className, 
    isPlay, 
    setIsPlay, 
    refAudio,
    currentTrack
  }) => (
    <div className={className.player_block}>
      <div className={`${className.player}`}>
        <PlayerController 
          refAudio={refAudio}
          setIsPlay={setIsPlay}
          isPlay={isPlay}/>
        <PlayerTrack 
          className={styles.play}
          currentTrack={currentTrack}
            />
      </div>
      <Volume className={className.volume_block}/>
    </div>
)

export default Player;
