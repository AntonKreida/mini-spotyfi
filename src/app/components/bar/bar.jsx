import React from 'react';

import Player from './player/player';
import Progress from './progress/progress';

const Bar = () => (
  <div className="bar">
    <div className="bar__container">
      <Progress/>
      <Player/>
    </div>
  </div>
)

export default Bar;
