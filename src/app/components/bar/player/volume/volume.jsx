import React from 'react';

import Input from '../../../../UI/input/input';

import VolumeSvg from './volume-svg/volume';
import styles from './volume.module.scss'

const Volume = ({className, volume, setVolume, setMuted, muted}) => {

  const handlerMuted = () => {
    setMuted(!muted);
  }

  const handlerVolume = (event) => {
    const inputStepValue = event.target.value
    setVolume(inputStepValue)
  }

  return(
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.image}>
          <VolumeSvg muted={muted} isActiveMuted={handlerMuted} styles={styles}/>
        </div>
        <div className={styles.progress}>
          <Input 
            value={volume} 
            onChange={handlerVolume} 
            classInput={styles.progress_line} 
            type='range' 
            max='100' 
            min='0'
            step='0.1'/>
        </div>
      </div>
    </div>
  )
};

export default Volume;
