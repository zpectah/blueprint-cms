import { useForm } from 'react-hook-form';
import { ITagsDetailForm } from '../types';

export const useTagsDetailForm = (formData: ITagsDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
