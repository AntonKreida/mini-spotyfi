import React from 'react';

import Input from '../../../UI/input/input';

import styles from './search.module.scss';
import Icon from './svg-icon/icon';


const Search = ({className}) => {
  const inputDate = {
    classInput: `${styles.input}`,
    placeholder: 'Поиск',
    type: 'search',
  }
  return (
    <div className={`${className} ${styles.search}`}>
      <Icon className={styles.icon} />
      <Input inputDate={inputDate}/>
    </div>
  )
}

export default Search;
