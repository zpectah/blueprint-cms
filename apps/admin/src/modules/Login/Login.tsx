import React from 'react';
import { DialogLayout, BodyBackground } from '../../components';
import { LoginForm } from './LoginForm';

const Login = () => {
  return (
    <DialogLayout
      meta={{
        title: 'Login',
      }}
      containerProps={{ maxWidth: 'sm' }}
      backgroundSlot={<BodyBackground />}
    >
      <LoginForm />
    </DialogLayout>
  );
};

export default Login;
