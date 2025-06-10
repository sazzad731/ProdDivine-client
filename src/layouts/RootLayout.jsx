import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div className="bg-second w-full 2xl:px-0 px-2 text-white">
      <header className="font-inter">
        <Navbar />
      </header>
      <main className="font-inter max-w-[93.75rem] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;