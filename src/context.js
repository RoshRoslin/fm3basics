import React, { useState, useContext } from 'react';

import sublinks from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [isHeroOpen, setIsHeroOpen] = useState(true);
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);

    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const closeHero = () => {
    setIsHeroOpen(false);
  };
  const openHero = () => {
    setIsHeroOpen(true);
    closeAbout();
    closeTutorials();
    closeSidebar();
  };

  const openTutorials = () => {
    setIsTutorialsOpen(true);
    closeHero();
    closeAbout();
    closeSidebar();
  };
  const openAbout = () => {
    setIsAboutOpen(true);
    closeHero();
    closeTutorials();
    closeSidebar();
  };

  const closeTutorials = () => {
    setIsTutorialsOpen(false);
  };

  const closeAbout = () => {
    setIsAboutOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        isHeroOpen,
        closeHero,
        openHero,
        openTutorials,
        closeTutorials,
        isTutorialsOpen,
        closeAbout,
        isAboutOpen,
        openAbout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
