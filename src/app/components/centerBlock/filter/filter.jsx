import React, {useCallback} from 'react';

import Modal from './modal/ModalFlitter';

const Filters = ({tracks, active, onClickModal, refButton, onKeyDown}) => {
  const ModalsDate = [
    {id:1, body: 'исполнителю', name: 'author'}, 
    {id:2, body: 'жанру', name: 'genre'},
    {id:3, body: 'году выпуска', name: 'year'}, 
  ];

  const modalRef = useCallback((element) => {
    if(!refButton) return
    
    refButton.current.push(element)
  }, [refButton])
 
  return(
    <div className="center-block__filter filter">
      <div className="filter__title">Поиск по:</div>
      {ModalsDate.map((modal) => (<Modal 
        key={modal.id} 
        active={active}
        onClick={onClickModal}
        onKeyDown={onKeyDown}
        tracks={tracks} 
        name={modal.name}
        ref={modalRef}>
        {modal.body}
      </Modal>))}
    </div>
  )
}

export default Filters;
