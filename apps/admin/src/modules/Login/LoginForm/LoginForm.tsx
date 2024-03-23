import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Card, CardContent, Button, Typography, Divider } from '@mui/material';
import { CFG_CMS } from '@blueprint/core';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { Form, FormBlock, FormFooter, FormField, EmailInput, PasswordInput } from '../../../components';
import { ILoginForm } from './types';
import { useLoginForm } from './useLoginForm';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useLoginForm();

  const submitHandler: SubmitHandler<ILoginForm> = (data, event) => {
    // TODO
    console.log('submit', data);
    // TODO
    navigate(ROUTES.dashboard.path);
  };

  return (
    <Card>
      <CardContent sx={{}}>
        <FormBlock
          boxProps={{
            sx: {
              paddingTop: `calc(${SPACING_BASE} * 2)`,
              paddingBottom: `calc(${SPACING_BASE} * 2)`,
              textAlign: 'center',
            },
          }}
        >
          <Typography variant="h1" sx={{ lineHeight: 1 }}>
            {CFG_CMS.name}
          </Typography>
        </FormBlock>
      </CardContent>
      <Divider />
      <CardContent>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <FormBlock>
            <FormField fieldId="login_email">
              <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <EmailInput
                    id="login_email"
                    placeholder="Type your email"
                    size="medium"
                    error={!!fieldState.error}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </FormField>
            <FormField fieldId="login_password">
              <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <PasswordInput
                    id="login_password"
                    placeholder="Type your password"
                    size="medium"
                    error={!!fieldState.error}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </FormField>
          </FormBlock>
          <FormFooter direction="column" justify="center" dense={false}>
            <Button type="submit" variant="contained" size="large" disabled={!isValid} fullWidth>
              Login
            </Button>
            <Button variant="text" size="large" color="secondary" fullWidth>
              Lost password
            </Button>
          </FormFooter>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
