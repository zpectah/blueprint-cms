import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../contexts';

const Dashboard = () => {
  const { t } = useTranslation();
  const { sidebarOpen, setSidebarOpen } = useAppContext();

  return (
    <>
      ...Dashboard...{t('button.open')}
      <br />
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>toggle sidebar</button>
    </>
  );
};

export default Dashboard;
