import React, { useState } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Form, FormBlock, FormField, Input } from '../../../components';
import { IUsersDetailForm } from './types';
import { useUsersDetailForm } from './useLoginForm';
import { Snackbar } from '@mui/material';

interface UsersDetailFormProps {
  formId: string;
  formData: IUsersDetailForm;
  afterSubmit?: (state: 'success' | 'warning' | 'error', message: string) => void;
}

const UsersDetailForm = ({ formId, formData, afterSubmit }: UsersDetailFormProps) => {
  const [responseSnack, setResponseSnack] = useState<{
    state: 'success' | 'warning' | 'error';
    message: string;
  } | null>(null);

  const { control, handleSubmit } = useUsersDetailForm(formData);

  const submitHandler: SubmitHandler<IUsersDetailForm> = (data, event) => {
    // TODO
    console.log('submit', data);
    // TODO #validation
    const state = 'success';
    const message = 'Some success message ...';

    // TODO
    setResponseSnack({
      state,
      message,
    });
    if (afterSubmit) afterSubmit(state, message);
  };

  return (
    <>
      <Form id={formId} onSubmit={handleSubmit(submitHandler)}>
        <FormBlock>
          <FormField fieldId="user_field" label="Some user field ...">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Input id="user_field" placeholder="Type your email" fullWidth {...field} />
              )}
            />
          </FormField>
        </FormBlock>
      </Form>
      <Snackbar
        open={!!responseSnack}
        autoHideDuration={5000}
        onClose={() => setResponseSnack(null)}
        message="Response from action ... instead of modal before"
      />
    </>
  );
};

export default UsersDetailForm;
