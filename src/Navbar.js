import React from 'react';

import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const {
    openSidebar,
    openSubmenu,
    closeSubmenu,

    openAbout,

    openTutorials,

    openHero,
  } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='nav-logo' alt='' /> */}
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className=' btn link-btn' onClick={openHero}>
              Home
            </button>
          </li>
          <li>
            <button className='btn link-btn' onClick={openAbout}>
              About
            </button>
          </li>
          <li>
            <button className='btn link-btn' onClick={openTutorials}>
              Tutorials
            </button>
          </li>
          <li>
            <button className='btn link-btn' onMouseOver={displaySubmenu}>
              Social Media
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
