import React from 'react';
import { useTranslation } from 'react-i18next';
import { DialogLayout, BodyBackground } from '../../components';
import { LoginForm } from './LoginForm';

const Login = () => {
  const { t } = useTranslation(['common', 'login']);

  return (
    <DialogLayout
      meta={{
        title: t('login:page.meta.title'),
      }}
      containerProps={{ maxWidth: 'sm' }}
      backgroundSlot={<BodyBackground />}
    >
      <LoginForm />
    </DialogLayout>
  );
};

export default Login;
