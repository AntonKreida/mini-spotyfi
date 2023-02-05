import React from 'react';

import Next from './controller-svg/next/next';
import Pause from './controller-svg/pause/pause';
import Play from './controller-svg/play/play';
import Prev from './controller-svg/prev/prev';
import Repeat from './controller-svg/repeat/repeat';
import Shuffle from './controller-svg/shuffle/shuffle';
import styles from './controls.module.scss'

const PlayerController = ({refAudio, isPlay, setIsPlay}) => {
  const handlerPlayAudio = () => {
    setIsPlay(!isPlay);
  }

  const handlerOnKeyDown = (event) => {
    const {target} = event;

    if(event.key === 'Enter') {
      console.log(target);
    }
  } 
  return (
    <div className={`${styles.controls} js-button`}>
      <div className={styles.prev}>
        <Prev/>
      </div>
      <div 
        className={`${styles.play} js-button`} 
        onClick={handlerPlayAudio}
        role="button"
        tabIndex={0}
        onKeyDown={handlerOnKeyDown}>
        {!isPlay ? <Play/> : <Pause/>}
      </div>
      <div className={`${styles.next} js-button`}>
        <Next/>
      </div>
      <div className={`${styles.repeat} js-button`}>
        <Repeat/>
      </div>
      <div className={`${styles.shuffle} js-button`}>
        <Shuffle/>
      </div>
    </div>
  )
}

export default PlayerController
