import React from 'react';

import Next from './controller-svg/next';
import Play from './controller-svg/play';
import Prev from './controller-svg/prev';
import Repeat from './controller-svg/repeat';
import Shuffle from './controller-svg/shuffle';
import styles from './controls.module.scss'

const PlayerController = () => (
  <div className={styles.controls}>
    <div className={styles.prev}>
      <Prev className={styles.prev_icon}/>
    </div>
    <div className={styles.play}>
      <Play className={styles.play_icon}/>
    </div>
    <div className={styles.next}>
      <Next className={styles.next_icon}/>
    </div>
    <div className={styles.repeat}>
      <Repeat className={styles.repeat_icon}/>
    </div>
    <div className={styles.shuffle}>
      <Shuffle className={styles.shuffle_icon}/>
    </div>
  </div>
)

export default PlayerController
