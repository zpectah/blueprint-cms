import React, { useEffect } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Snackbar } from '@mui/material';
import { FormResponseState, IMembersDetailForm } from '../../../types';
import { formResponseStateKeys } from '../../../enums';
import { Form, FormBlock, FormField, Input } from '../../../components';
import { MEMBERS_DETAIL_FORM_ID } from '../constants';
import { useMembersContext } from '../context';
import { useMembersDetailForm } from '../hooks';

interface MembersDetailFormProps {
  onSubmit?: (state: FormResponseState, message: string) => void;
}

const MembersDetailForm = ({ onSubmit }: MembersDetailFormProps) => {
  const { detailData, responseSnack, setResponseSnack, setFormDirty } = useMembersContext();
  const { control, handleSubmit, formState } = useMembersDetailForm(detailData);

  const submitHandler: SubmitHandler<IMembersDetailForm> = (data, event) => {
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
      <Form id={MEMBERS_DETAIL_FORM_ID} onSubmit={handleSubmit(submitHandler)}>
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

export default MembersDetailForm;
