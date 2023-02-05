import React from 'react';

import styles from './bar.module.scss';
import Player from './player/player';
import Progress from './progress/progress';

const Bar = (
  {
    isPlay, 
    setIsPlay, 
    trackData, 
    setTrackData, 
    refAudio, 
    currentTrack,
    progressTime
  }) => (
    <div className={styles.bar}>
      <div className={styles.bar_container}>
        <Progress progressTime={progressTime} refAudio={refAudio}/>
        <Player 
          className={styles}
          isPlay={isPlay} 
          setIsPlay={setIsPlay}
          trackData={trackData}
          setTrackData={setTrackData}
          refAudio={refAudio}
          currentTrack={currentTrack}/>
      </div>
    </div>
)

export default Bar;
