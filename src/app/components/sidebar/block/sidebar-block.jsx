import React from 'react';

import ItemOne from '../../../../assets/images/playlist01.png'
import ItemTwo from '../../../../assets/images/playlist02.png'
import ItemThree from '../../../../assets/images/playlist03.png'

const SidebarBlock = ({styles}) => (
  <div className={styles.block}>
    <div className={styles.list}>
      <div className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.img} src={ItemOne} alt="Day's playlist" />
        </a>
      </div>
      <div className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.img} src={ItemTwo} alt="Day's playlist" />
        </a>
      </div>
      <div className={styles.item}>
        <a className={styles.link} href="/">
          <img className={styles.img} src={ItemThree} alt="Day's playlist" />
        </a>
      </div>
    </div>
  </div>
)

export default SidebarBlock
