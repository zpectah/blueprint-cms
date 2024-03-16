import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();

  return <>...Dashboard...{t('button.open')}</>;
};

export default Dashboard;
