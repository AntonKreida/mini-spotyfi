import React from 'react';

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
        <svg className='track-play__like-svg'>
          <path d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"/>
        </svg>
      </div>
      <div className="track-play__dislike _btn-icon">
        <svg className='track-play__dislike-svg'viewBox="0 0 16 15">
          <path d="M1 1L15 13.5"/>
          <path d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"/>
        </svg>
      </div>
    </div>
  </div>
)

export default PlayerTrack;
