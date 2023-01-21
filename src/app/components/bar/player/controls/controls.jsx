import React from 'react';

import Next from './controller-svg/next';
import Play from './controller-svg/play';
import Prev from './controller-svg/prev';
import Repeat from './controller-svg/repeat';
import Shuffle from './controller-svg/shuffle';

const PlayerController = () => (
  <div className="player__controls">
    <div className="player__btn-prev">
      <Prev className='player__btn-prev-svg'/>
    </div>
    <div className="player__btn-play">
      <Play className='player__btn-play-svg'/>
    </div>
    <div className="player__btn-next">
      <Next className='player__btn-next-svg'/>
    </div>
    <div className="player__btn-repeat">
      <Repeat className='player__btn-repeat-svg'/>
    </div>
    <div className="player__btn-shuffle">
      <Shuffle className='player__btn-shuffle-svg'/>
    </div>
  </div>
)

export default PlayerController
