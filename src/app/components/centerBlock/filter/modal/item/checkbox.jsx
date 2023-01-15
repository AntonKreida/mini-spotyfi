/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';

const Checkbox = () => {
  const [value, setValue] = useState('')
  const handlerCheckedInput = (event) => {
    setValue(event.target.value);
  }


  return (
    <>
      <div className='modal__item'>
        <input className='modal__checkbox js-input-checkbox' type="radio" id='new-song' name="song" value="new" checked={value === 'new'} onChange={handlerCheckedInput}/>
        <label className='modal__label' htmlFor='new-song'>Более новые</label>
      </div>
      <div className='modal__item'>
        <input className='modal__checkbox js-input-checkbox' type="radio" id='old-song' name="song" value="old" checked={value === 'old'} onChange={handlerCheckedInput}/>
        <label className='modal__label' htmlFor='old-song'>Более старые</label>
      </div>
    </>
  )
};

export default Checkbox
