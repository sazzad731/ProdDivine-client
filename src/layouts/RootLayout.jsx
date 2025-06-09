import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default RootLayout;