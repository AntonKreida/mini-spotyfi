import React from 'react';

import PlaylistItem from './playlist-item';

const Playlist = ({tracks}) => (
  <div className="content__playlist playlist">
    {tracks.map(track=> (<PlaylistItem key={track.id} title={track.title} author={track.author} album={track.album} time={track.time}/>))}
  </div>
)

export default Playlist;
