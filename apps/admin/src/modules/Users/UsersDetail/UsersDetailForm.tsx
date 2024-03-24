import React, { useEffect } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Snackbar } from '@mui/material';
import { FormResponseState } from '../../../types';
import { formResponseStateKeys } from '../../../enums';
import { Form, FormBlock, FormField, Input } from '../../../components';
import { IUsersDetailForm } from '../types';
import { useUsersContext } from '../context';
import { useUsersDetailForm } from '../hooks';

interface UsersDetailFormProps {
  formId: string;
  formData: IUsersDetailForm;
  onSubmit?: (state: FormResponseState, message: string) => void;
}

const UsersDetailForm = ({ formId, formData, onSubmit }: UsersDetailFormProps) => {
  const { responseSnack, setResponseSnack, setFormDirty } = useUsersContext();
  const { control, handleSubmit, formState } = useUsersDetailForm(formData);

  const submitHandler: SubmitHandler<IUsersDetailForm> = (data, event) => {
    // TODO
    console.log('submit', data);
    // TODO #validation
    const state = formResponseStateKeys.success;
    const message = 'Some success message ...';

    // TODO
    setResponseSnack({
      state,
      message,
    });
    if (onSubmit) onSubmit(state, message);
  };

  useEffect(() => setFormDirty(formState.isDirty), [formState.isDirty]);

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
      {/* TODO - Where to show this snacks ??? */}
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
