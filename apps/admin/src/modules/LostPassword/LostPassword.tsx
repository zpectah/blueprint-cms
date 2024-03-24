import React from 'react';
import { useTranslation } from 'react-i18next';
import { DialogLayout } from '../../components';

const LostPassword = () => {
  const { t } = useTranslation(['common', 'lostPassword']);

  return (
    <DialogLayout
      meta={{
        title: t('lostPassword:page.meta.title'),
      }}
    >
      <div>...LostPassword...</div>
    </DialogLayout>
  );
};

export default LostPassword;
