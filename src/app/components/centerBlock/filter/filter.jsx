import React from 'react';

import Button from '../../../UI/button/button';

const Filter = () => {
  const buttonDate = [{id:1, body: 'исполнителю'}, {id:2, body: 'году выпуска'}, {id:3, body: 'жанру'}]
  return(
    <div className="center-block__filter filter">
      <div className="filter__title">Поиск по:</div>
      {buttonDate.map(button => (<Button key={button.id} classButton="filter__button">{button.body}</Button>))}
    </div>
  )
}

export default Filter;
