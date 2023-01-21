import React from 'react';

import TrackLickSvg from './svg-components/track-like';
import TrackTitleSvg from './svg-components/track-title-svg';

const PlaylistItem = ({name, author, album, time, logo, link}) => {
  const minutes = String(Math.floor(time / 60));
  let seconds = String(time % 60);
  
  seconds = seconds.length <= 1 ? `0${seconds}`:`${seconds}`

  const textTime = `${minutes}:${seconds}`
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            {!logo ? <TrackTitleSvg className='track__title-svg' /> : logo}
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href={link}>
              {name}
              <span className="track__title-span" />
            </a>
          </div>
        </div> 
        <div className="track__author">
          <a className='track__author-link' href={link}>
            {author}
          </a>
        </div>
        <div className="track__album">
          <a className='track__album-link' href={link}>
            {album}
          </a>
        </div>
        <div className="track__time">
          <TrackLickSvg className='track__time-svg'/>
          <span className='track__time-text'>{textTime}</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem
