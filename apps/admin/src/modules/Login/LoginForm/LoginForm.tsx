import React from 'react';
import { Card, CardContent, TextField, Button, Typography, Divider } from '@mui/material';
import { CFG_CMS } from '@blueprint/core';
import { SPACING_BASE } from '../../../styles';
import { Form, FormBlock, FormFooter, FormField } from '../../../components';
import { useLoginForm } from './useLoginForm';

const LoginForm = () => {
  const { form } = useLoginForm();

  return (
    <Card>
      <CardContent sx={{ background: 'rgba(200,200,200,.125)' }}>
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
        <Form>
          <FormBlock>
            <FormField fieldId="login_email" label="User email">
              <TextField id="login_email" name="email" fullWidth />
            </FormField>
            <FormField fieldId="login_password" label="User password">
              <TextField id="login_password" name="password" type="password" fullWidth />
            </FormField>
          </FormBlock>
          <FormFooter justify="center" dense={false}>
            <Button type="submit" variant="contained" size="large">
              Login
            </Button>
            <Button variant="text" size="large" color="secondary">
              Lost password
            </Button>
          </FormFooter>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
