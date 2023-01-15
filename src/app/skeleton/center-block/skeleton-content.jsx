import React from 'react';

import SkeletonPlaylist from './skeleton-playlist';

const SkeletonContent = () => (
  <div className="center-block__content content">
    <div className="content__header playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">Исполнитель</div>
      <div className="playlist-title__col col03">Альбом</div>
      <div className="playlist-title__col col04">
        <svg className='playlist-title__icon' viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="5.5"/>
          <path d="M4 6H6.5V2.5"/>
        </svg>
      </div>
    </div>
    <SkeletonPlaylist/>
  </div>
)

export default SkeletonContent;
