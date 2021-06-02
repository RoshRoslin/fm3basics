import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, openTutorials, openAbout, openHero } =
    useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          <h3 onClick={openHero} className='sidebar-nav-links'>
            Home
          </h3>
          <h3 onClick={openAbout} className='sidebar-nav-links'>
            About
          </h3>

          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                {page === 'Tutorials' ? (
                  <h3 onClick={openTutorials} className='sidebar-nav-links'>
                    {page}
                  </h3>
                ) : (
                  <h3>{page}</h3>
                )}
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a
                        key={index}
                        href={url}
                        target='_blank'
                        onClick={closeSidebar}
                        rel='noopener noreferrer'
                      >
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
