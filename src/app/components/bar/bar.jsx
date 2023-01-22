import React from 'react';

import styles from './bar.module.scss';
import Player from './player/player';
import Progress from './progress/progress';

const Bar = () => (
  <div className={styles.bar}>
    <div className={styles.bar_container}>
      <Progress styles={styles}/>
      <Player className={styles}/>
    </div>
  </div>
)

export default Bar;
