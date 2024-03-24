import React, { useEffect } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Snackbar } from '@mui/material';
import { FormResponseState } from '../../../types';
import { formResponseStateKeys } from '../../../enums';
import { Form, FormBlock, FormField, Input } from '../../../components';
import { IPostsDetailForm } from '../types';
import { POSTS_DETAIL_FORM_ID } from '../constants';
import { usePostsContext } from '../context';
import { usePostsDetailForm } from '../hooks';

interface PostsDetailFormProps {
  onSubmit?: (state: FormResponseState, message: string) => void;
}

const PostsDetailForm = ({ onSubmit }: PostsDetailFormProps) => {
  const { detailData, responseSnack, setResponseSnack, setFormDirty } = usePostsContext();
  const { control, handleSubmit, formState } = usePostsDetailForm(detailData);

  const submitHandler: SubmitHandler<IPostsDetailForm> = (data, event) => {
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
      <Form id={POSTS_DETAIL_FORM_ID} onSubmit={handleSubmit(submitHandler)}>
        <FormBlock>
          <FormField fieldId="posts_field" label="Some posts field ...">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Input id="posts_field" placeholder="Type your email" fullWidth {...field} />
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

export default PostsDetailForm;
