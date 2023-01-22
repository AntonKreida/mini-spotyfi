import React from 'react';

const Personal = ({styles ,infoPersonal}) => {
  const {name, avatar} = infoPersonal;
  return(
    <div className={styles.personal}>
      <p className={styles.personal_name}>{name}</p>
      <div className={styles.avatar}>{avatar}</div>
    </div>
  )
}

export default Personal
