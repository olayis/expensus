import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Navbar
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
      />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <footer className='footer--layout'>
        <Footer />
      </footer>
      <div
        className={
          sidebarOpen
            ? 'main-content sidebar__overlay--open'
            : 'sidebar__overlay--close'
        }
        onClick={() => closeSidebar()}
        aria-label='Close Sidebar Overlay'
      ></div>
    </>
  );
};

export default Layout;
