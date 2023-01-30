import React, {useState, useEffect, useRef, useCallback} from 'react';


import '../base.scss';
import Bar from '../components/bar/bar';
import CenterBlock from '../components/centerBlock/centerBlock';
import Footer from '../components/footer/footer';
import NavBar from '../components/nav/nav';
import Sidebar from '../components/sidebar/sidebar';
import styles from '../main.module.scss';
import SkeletonBar from '../skeleton/bar/skeleton-bar';
import SkeletonCenterBlock from '../skeleton/center-block/skeleton';
import SkeletonSidebar from '../skeleton/sidebar/skeleton-sidebar';

const Main = () => {
  const [tracksList, setTracksList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const refButton = useRef([]);
  
  const handlerClickWindow = useCallback(() => {
    window.addEventListener('click', (event) => {
  
      const targetElement = refButton.current.find(element => {
        if(event.target.closest('.js-button') === null) {
          return null
        } 
          
        if (element === event.target.closest('.js-button')) {
          return element;
        }
  
        return null
      })
  
      if(event.target.closest('.js-button') !== targetElement) {
        setActiveModal(false);
      };
    })
  }, [])
  
  const handlerOnKeyDown = (event) => {
    const button = event.target.closest('.js-button');
    const nameButton = button.getAttribute('name');
  
    if(event.key === 'Enter') {
      setActiveModal(nameButton) 
    }
  
  }
  
  
  const handlerModalButtonActive = (event) => {
    const button = event.target.closest('.js-button');
    const nameButton = button.getAttribute('name');
  
    if(event.target.closest('.modal')) {
      return
    }
  
    if(nameButton === activeModal) {
      setActiveModal(null)
      return;
    };
  
    setActiveModal(nameButton);
  }
  
  useEffect(() => {
    setLoading(true)
    handlerClickWindow();
  
    const fetchDate =  async () => {
      const res = await fetch('https://painassasin.online/catalog/track/all/');
      const result = await res.json(); 
  
      setLoading(false)
      setTracksList(result)
    };
  
    fetchDate();
  }, [handlerClickWindow]);
  
  return(
    <>
      <main className={styles.main}>
        <NavBar className={styles.main__nav}/>
        {loading && <SkeletonCenterBlock className={styles}/>}
        {!loading && <CenterBlock 
          tracks={tracksList} 
          onClickModal={handlerModalButtonActive}
          onKeyDown={handlerOnKeyDown}
          active={activeModal}
          refButton={refButton}
          className={styles.center}/>}
        {loading && <SkeletonSidebar className={styles.main__sidebar}/> } 
        {!loading && <Sidebar className={styles.main__sidebar}/>}
      </main>
      {loading && <SkeletonBar/>} 
      {!loading && <Bar/>}
      <Footer/>
    </>
  )
}


export default Main;
