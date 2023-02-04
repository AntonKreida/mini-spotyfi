import React, {useState, useEffect} from 'react';
import { useOutletContext, useParams } from 'react-router-dom';


import CenterBlock from '../../components/centerBlock/centerBlock';
import SkeletonCenterBlock from '../../skeleton/center-block/skeleton';

const Selection = () => {
  const [tracksList, setTracksList] = useState([]);
  const [loading, handlerModalButtonActive, handlerOnKeyDown, handlerClickWindow, setLoading, styles, activeModal, refButton] = useOutletContext();
  const params = useParams();

  const titlesList = ['Плейлист дня', '100 танцевальных хитов', 'Инди-заряд'];


  useEffect(() => {
    setLoading(true)
    handlerClickWindow();
  
    const fetchDate =  async () => {
      const res = await fetch(`https://painassasin.online/catalog/selection/${params.id}`);
      const result = await res.json(); 
  
      setLoading(false)
      setTracksList(result)
    };
  
    fetchDate();
  }, [handlerClickWindow, setLoading, params]);


  return(
    <>
      {loading && <SkeletonCenterBlock className={styles}/>}
      {!loading && <CenterBlock 
        tracks={tracksList.items} 
        onClickModal={handlerModalButtonActive}
        onKeyDown={handlerOnKeyDown}
        active={activeModal}
        refButton={refButton}
        title={`${titlesList[params.id - 1]}`}
        className={styles.center}/>}
    </>
  )
}

export default Selection;
