import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div className="bg-second relative w-full 2xl:px-0 px-2 text-white overflow-hidden">
      <div className="absolute left-20 top-40 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(144,52,183,0.2)_0%,_transparent_70%)] pointer-events-none z-0 blur-2xl"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(144,52,183,0.2)_0%,_transparent_70%)] pointer-events-none z-0 blur-2xl"></div>
      <header className="font-inter">
        <Navbar />
      </header>
      <main className="font-inter max-w-[93.75rem] mx-auto z-0">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default RootLayout;