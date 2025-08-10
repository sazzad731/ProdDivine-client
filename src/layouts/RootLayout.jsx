import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div className="bg-base-100 relative w-full overflow-hidden">
      <header className="font-inter bg-white dark:bg-base-300 shadow fixed left-0 right-0 z-50">
        <Navbar />
      </header>
      <main className="font-inter max-w-[93.75rem] 2xl:px-0 px-2 mx-auto z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;