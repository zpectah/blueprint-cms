import React from 'react';
import { useAppContext } from '../../../contexts';

const Sidebar = () => {
  const { sidebarOpen } = useAppContext();

  return <aside>Sidebar...{sidebarOpen ? 'y' : 'n'}</aside>;
};

export default Sidebar;
