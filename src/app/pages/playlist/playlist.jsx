import React, {useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';


import CenterBlock from '../../components/centerBlock/centerBlock';
import SkeletonCenterBlock from '../../skeleton/center-block/skeleton'

const Playlist = () => {
  const [tracksList, setTracksList] = useState([]);
  const  [loading, handlerModalButtonActive, handlerOnKeyDown, handlerClickWindow, setLoading, styles, activeModal, refButton] = useOutletContext();

  useEffect(() => {
    setLoading(true)
    handlerClickWindow();
  
    const fetchDate =  async () => {
      const res = await fetch('https://painassasin.online/catalog/selection/');
      const result = await res.json(); 
  
      setLoading(false)
      setTracksList([{
        album: 'Carol Of The Bells',
        author: 'Alexander Nakarada',
        duration_in_seconds: 205,
        genre: 'Рок музыка',
        id: 28,
        logo: null,
        name: 'Carol Of The Bells'
      }])
    };
  
    fetchDate();
  }, [handlerClickWindow, setLoading]);


  return (
    <>
      {loading && <SkeletonCenterBlock className={styles}/>}
      {!loading && <CenterBlock 
        tracks={tracksList} 
        onClickModal={handlerModalButtonActive}
        onKeyDown={handlerOnKeyDown}
        active={activeModal}
        refButton={refButton}
        title="Мой плейлист"
        className={styles.center}/>}
    </>
  )
}

export default Playlist
