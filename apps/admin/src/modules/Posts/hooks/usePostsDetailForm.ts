import { useForm } from 'react-hook-form';
import { IPostsDetailForm } from '../../../types';

export const usePostsDetailForm = (formData: IPostsDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
