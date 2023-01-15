import React from 'react';

import SkeletonPlaylistItem from './skeleton-playlist-item';

const SkeletonPlaylist = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="content__playlist playlist">
      {Array(8).fill().map((item, index) => (<SkeletonPlaylistItem key={numbers[index]}/>))}
    </div>
  )
}

export default SkeletonPlaylist
