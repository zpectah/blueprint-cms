import React from 'react';
// import { useTranslation } from 'react-i18next';
import { DialogLayout } from '../../components';

const Error = () => {
  // const { t } = useTranslation();
  return (
    <DialogLayout
      meta={{
        title: 'Error',
      }}
    >
      <div>...Error...</div>
    </DialogLayout>
  );
};

export default Error;
