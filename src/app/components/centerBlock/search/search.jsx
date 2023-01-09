import React from 'react';

import Input from '../../../UI/input/input';

const Search = () => {
  const inputDate = {
    classInput: 'search__input',
    placeholder: 'Поиск',
    type: 'search',
  }
  return (
    <div className="center-block__search search">
      <svg className='search__icon' viewBox="0 0 18 18">
        <path d="M11.9276 12.7748L15.37 17.0644"strokeLinecap="round"/>
        <circle cx="8.48533" cy="8.48526" r="5.5"/>
      </svg>
      <Input inputDate={inputDate}/>
    </div>
  )
}

export default Search;
