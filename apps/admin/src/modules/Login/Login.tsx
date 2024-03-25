import React from 'react';
import { DialogLayout, BodyBackground } from '../../components';
import { useLoginTranslations } from '../../hooks';
import { LoginForm } from './LoginForm';

const Login = () => {
  const { mt } = useLoginTranslations();

  return (
    <DialogLayout
      meta={{
        title: mt['page.meta.title'],
      }}
      containerProps={{ maxWidth: 'sm' }}
      backgroundSlot={<BodyBackground />}
    >
      <LoginForm />
    </DialogLayout>
  );
};

export default Login;
