import React, { useEffect } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Snackbar } from '@mui/material';
import { FormResponseState } from '../../../types';
import { formResponseStateKeys } from '../../../enums';
import { Form, FormBlock, FormField, Input } from '../../../components';
import { ITagsDetailForm } from '../types';
import { TAGS_DETAIL_FORM_ID } from '../constants';
import { useTagsContext } from '../context';
import { useTagsDetailForm } from '../hooks';

interface TagsDetailFormProps {
  onSubmit?: (state: FormResponseState, message: string) => void;
}

const TagsDetailForm = ({ onSubmit }: TagsDetailFormProps) => {
  const { detailData, responseSnack, setResponseSnack, setFormDirty } = useTagsContext();
  const { control, handleSubmit, formState } = useTagsDetailForm(detailData);

  const submitHandler: SubmitHandler<ITagsDetailForm> = (data, event) => {
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
      <Form id={TAGS_DETAIL_FORM_ID} onSubmit={handleSubmit(submitHandler)}>
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

export default TagsDetailForm;