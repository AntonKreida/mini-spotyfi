import React from 'react';

import Input from '../../../../UI/input/input';

import VolumeSvg from './volume-svg/volume';

const Volume = () => {
  const inputData = {
    classInput: 'volume__progress-line _btn',
    type: 'range',
  }

  return(
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <div className="volume__image">
          <VolumeSvg className='volume__svg'/>
        </div>
        <div className="volume__progress _btn">
          <Input inputDate={inputData}/>
        </div>
      </div>
    </div>
  )
};

export default Volume;
