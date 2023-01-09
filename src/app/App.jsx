import React from 'react';

import Bar from './components/bar/bar';
import CenterBlock from './components/centerBlock/centerBlock';
import Footer from './components/footer/footer';
import NavBar from './components/nav/nav';
import Sidebar from './components/sidebar/sidebar';

const App = () => (
  <>
    <main className='main'>
      <NavBar/>
      <CenterBlock/>
      <Sidebar/>
    </main>
    <Bar/>
    <Footer/>
  </>
)

export default App;
