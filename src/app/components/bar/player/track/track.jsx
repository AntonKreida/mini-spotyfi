import React from 'react';

import Dislike from './track-svg/dislike';
import Like from './track-svg/like';

const PlayerTrack = () => (
  <div className="player__track-play track-play">
    <div className="track-play__contain">
      <div className="track-play__image">
        <svg className='track-play__svg' alt="music">
          <use xlinkHref='/' />
        </svg>
      </div>
      <div className="track-play__author">
        <a className='track-play__author-link' href="/">Люмен</a>
      </div>
      <div className="track-play__album">
        <a className='track-play__album-link' href="/">Хроники</a>
      </div>
    </div>
    <div className="track-play__like-dis">
      <div className="track-play__like _btn-icon">
        <Like className='track-play__like-svg'/>
      </div>
      <div className="track-play__dislike _btn-icon">
        <Dislike className='track-play__dislike-svg'/>
      </div>
    </div>
  </div>
)

export default PlayerTrack;
