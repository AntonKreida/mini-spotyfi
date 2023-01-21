import React from 'react';

const ItemModal = ({body}) => {
  const handlerClickItem = (event) => {
    const target = event.target.closest('.js-item');

    target.classList.add('active');
    event.stopPropagation();
  }

  const handlerOnKeyEnter = (event) => {
    const target = event.target.closest('.modal__item');
    const item = target.querySelector('.js-item');

    if(event.key === 'Enter') {
      item.classList.add('active');
    }
  }

  return(
    <div role="button" tabIndex={0} className='modal__item js-modal-item' onClick={handlerClickItem} onKeyDown={handlerOnKeyEnter}>
      <span className='modal__item-button js-item'>{body}</span>
    </div>
  )
}

export default ItemModal;
