import React from 'react';
import { DialogLayout } from '../../components';
import { LoginForm } from './LoginForm';

const Login = () => {
  return (
    <DialogLayout
      meta={{
        title: 'Login',
      }}
      containerProps={{ maxWidth: 'sm' }}
    >
      <LoginForm />
    </DialogLayout>
  );
};

export default Login;
