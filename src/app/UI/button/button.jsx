import React from 'react';

const Button = ({children, classButton}) => (
  <button className={classButton} type="button">{children}</button>
)

export default Button;
