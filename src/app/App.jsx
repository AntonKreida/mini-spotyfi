import React, {useState, useEffect}  from 'react';

import Bar from './components/bar/bar';
import CenterBlock from './components/centerBlock/centerBlock';
import Footer from './components/footer/footer';
import NavBar from './components/nav/nav';
import Sidebar from './components/sidebar/sidebar';
import SkeletonBar from './skeleton/bar/skeleton-bar';
import SkeletonCenterBlock from './skeleton/center-block/skeleton';
import SkeletonSidebar from './skeleton/sidebar/skeleton-sidebar';


const App = () => {
  const [tracksList, setTracksList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    async function fetchDate () {
      const res = await fetch('https://painassasin.online/catalog/track/all/');

      const result = await res.json(); 

      setLoading(false)
      setTracksList(result)
    }

    fetchDate();
  }, []);

  return(
    <>
      <main className='main'>
        <NavBar/>
        {loading && <SkeletonCenterBlock/>}
        {!loading && <CenterBlock tracks={tracksList}/>}
        {loading && <SkeletonSidebar/> } 
        {!loading && <Sidebar/>}
      </main>
      {loading && <SkeletonBar/>} 
      {!loading && <Bar/>}
      <Footer/>
    </>
  )
}

export default App;
