import React from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
