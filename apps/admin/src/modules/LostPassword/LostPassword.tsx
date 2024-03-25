import React from 'react';
import { DialogLayout } from '../../components';
import { useLostPasswordTranslations } from '../../hooks';

const LostPassword = () => {
  const { mt } = useLostPasswordTranslations();

  return (
    <DialogLayout
      meta={{
        title: mt['page.meta.title'],
      }}
    >
      <div>...LostPassword...</div>
    </DialogLayout>
  );
};

export default LostPassword;
