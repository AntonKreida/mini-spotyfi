import React from 'react';

const SkeletonPlaylistItem = () => (
  <div className="playlist__item">
    <div className="playlist__track track">
      <div className="track__title">
        <div className="track__title-image skeleton" />
        <div className="track__title-text skeleton" />
      </div> 
      <div className="track__author skeleton" />
      <div className="track__album skeleton" />
    </div>
  </div>
)

export default SkeletonPlaylistItem
