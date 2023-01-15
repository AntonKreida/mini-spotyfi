import React, {useState} from 'react';

import Modal from './modal/ModalFlitter';

const Filters = ({tracks}) => {
  const ModalsDate = [
    {id:1, body: 'исполнителю', name: 'author'}, 
    {id:2, body: 'жанру', name: 'genre'},
    {id:3, body: 'году выпуска', name: 'year'}, 
  ];
  const [activeModal, setActiveModal] = useState(null);

  const handlerModalButtonActive = (event) => {
    event.stopPropagation()
    const button = event.target.closest('.js-button');
    const nameButton = button.getAttribute('name')

    if(nameButton === activeModal) {
      setActiveModal(null)
      return;
    }    

    setActiveModal(nameButton);
  }


  return(
    <div className="center-block__filter filter">
      <div className="filter__title">Поиск по:</div>
      {ModalsDate.map(modal => (<Modal 
        key={modal.id} 
        active={activeModal} 
        onClick={handlerModalButtonActive}
        tracks={tracks} 
        name={modal.name}>
        {modal.body}
      </Modal>))}
    </div>
  )
}

export default Filters;
