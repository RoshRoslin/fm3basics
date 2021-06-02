import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import About from './About';
import Tutorials from './Tutorials';
import Footer from './Footer';
import { useGlobalContext } from './context';

function App() {
  const { isHeroOpen, isAboutOpen, isTutorialsOpen } = useGlobalContext();
  return (
    <>
      <Navbar />
      <Sidebar />
      {isHeroOpen && <Hero />}
      {isAboutOpen && <About></About>}
      {isTutorialsOpen && <Tutorials></Tutorials>}
      <Submenu />
      <Footer></Footer>
    </>
  );
}

export default App;
