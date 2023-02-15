import React from 'react';

const ThemeLight = ({styleTheme, onClick}) => (
  <svg role='button' onClick={onClick} className={styleTheme} viewBox="0 0 40 40"  >
    <circle cx="19.5576" cy="20.375" r="19" stroke="black"/>
  </svg>
);

export default ThemeLight;
