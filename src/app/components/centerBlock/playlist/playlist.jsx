import React from 'react';

import PlaylistItem from './playlist-item';

const Playlist = ({tracks}) => (
  <div className="content__playlist playlist">
    {tracks.map(track=> (<PlaylistItem key={track.id} name={track.name} author={track.author} album={track.album} time={track.duration_in_seconds}/>))}
  </div>
)

export default Playlist;
