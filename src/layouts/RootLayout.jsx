import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div className="bg-second w-full 2xl:px-0 px-2">
      <header className="font-inter">
        <Navbar />
      </header>
      <main className="font-inter">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;