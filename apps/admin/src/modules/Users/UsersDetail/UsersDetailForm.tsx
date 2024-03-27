import React, { useEffect } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Snackbar } from '@mui/material';
import { FormResponseState, IUsersDetailForm } from '../../../types';
import { formResponseStateKeys } from '../../../enums';
import { Form, FormBlock, FormField, Input } from '../../../components';
import { USERS_DETAIL_FORM_ID } from '../constants';
import { useUsersContext } from '../context';
import { useUsersDetailForm } from '../hooks';

interface UsersDetailFormProps {
  onSubmit?: (state: FormResponseState, message: string) => void;
}

const UsersDetailForm = ({ onSubmit }: UsersDetailFormProps) => {
  const { detailData, responseSnack, setResponseSnack, setFormDirty } = useUsersContext();
  const { control, handleSubmit, formState } = useUsersDetailForm(detailData);

  const submitHandler: SubmitHandler<IUsersDetailForm> = (data, event) => {
    // TODO #submit-handler
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setFormDirty(formState.isDirty), [formState.isDirty]);

  return (
    <>
      <Form id={USERS_DETAIL_FORM_ID} onSubmit={handleSubmit(submitHandler)}>
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
