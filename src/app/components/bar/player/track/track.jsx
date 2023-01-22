import React from 'react';

import Dislike from './track-svg/dislike';
import Like from './track-svg/like';
import styles from './track.module.scss'


const PlayerTrack = ({className}) => (
  <div className={`${className}`}>
    <div className={styles.container}>
      <div className={styles.image}>
        <svg className={styles.icon} alt="music">
          <use xlinkHref='/' />
        </svg>
      </div>
      <div className={styles.author}>
        <a className={styles.author_link} href="/">Люмен</a>
      </div>
      <div className={styles.album}>
        <a className={styles.album_link} href="/">Хроники</a>
      </div>
    </div>
    <div className={styles.like_dis}>
      <div className={styles.like}>
        <Like className={styles.like_icon}/>
      </div>
      <div className={styles.dislike}>
        <Dislike className={styles.dislike_icon}/>
      </div>
    </div>
  </div>
)

export default PlayerTrack;
