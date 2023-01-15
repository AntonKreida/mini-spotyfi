import React from 'react';

const PlaylistItem = ({img, name, author, album, time}) => {
  const minutes = String(Math.floor(time / 60));
  let seconds = String(time % 60);
  
  seconds = seconds.length <= 1 ? `0${seconds}`:`${seconds}`

  const textTime = `${minutes}:${seconds}`
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className='track__title-svg' viewBox="0 0 20 19">
              <path d="M8 16V1.9697L19 1V13"/>
              <ellipse cx="4.5" cy="16" rx="3.5" ry="2"/>
              <ellipse cx="15.5" cy="13" rx="3.5" ry="2"/>
              <use href={img} />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="/">
              {name}
              <span className="track__title-span" />
            </a>
          </div>
        </div> 
        <div className="track__author">
          <a className='track__author-link' href="/">
            {author}
          </a>
        </div>
        <div className="track__album">
          <a className='track__album-link' href="/">
            {album}
          </a>
        </div>
        <div className="track__time">
          <svg className='track__time-svg' viewBox="0 0 16 14">
            <path d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"/>
          </svg>
          <span className='track__time-text'>{textTime}</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem
