import React from 'react';

const Input = ({inputDate}) => {
  const {classInput, placeholder, type} = inputDate;
  return (
    <input className={classInput} type={type} placeholder={placeholder} />
  )
}

export default Input;
