/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const ItemModal = ({body}) => {
  const handlerClickItem = (event) => {
    const target = event.target.closest('.js-item');

    target.classList.add('active');
  }

  return(
    <div role="button" tabIndex={0} className='modal__item' onClick={handlerClickItem}>
      <span className='modal__item-button js-item'>{body}</span>
    </div>
  )
}

export default ItemModal;
