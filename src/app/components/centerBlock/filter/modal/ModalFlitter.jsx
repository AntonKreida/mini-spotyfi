/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Checkbox from './item/checkbox';
import ItemModal from './item/item';

// eslint-disable-next-line react/display-name
const Modal = React.forwardRef(({children, active, onClick, name, tracks}, ref) => {
  const authorsSet = new Set();
  const genresSet = new Set();

  if(tracks) {
    tracks.forEach(track => {
      authorsSet.add(track.author)
      genresSet.add(track.genre)
    })
  }

  const authors = Array.from(authorsSet)
  const genres = Array.from(genresSet)

  return(
    <div ref={ref} onClick={(event) => {onClick(event)}} className={(active === name) ? 'filter__button js-button active' : 'filter__button js-button'} role="button" tabIndex={0} name={name}>
      <span>{children}</span>
      <div  className={active !== 'year' ? 'filter__modal modal' : 'filter__modal modal checkbox'}>
        <div className="modal__inner" role='listbox' tabIndex={0}>
          {name === 'author' && authors.map((value) => (<ItemModal key={value}  body={value}/>))}
          {name === 'genre' && genres.map((value) => (<ItemModal key={value}  body={value}/>))}
          {name === 'year' && <Checkbox/>}
        </div>
      </div>
      {name === 'genre' ? 
        <div className='filter__button-amount'>
          <span>
            {name === 'genre' ? genres.length : null}
          </span> 
        </div> : null }
      {name === 'author' ? 
        <div className='filter__button-amount'>
          <span>
            {name === 'author' ? authors.length : null}
          </span> 
        </div> : null } 
    </div>
  )
})

export default Modal;
