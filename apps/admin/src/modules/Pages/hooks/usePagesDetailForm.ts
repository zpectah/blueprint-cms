import { useForm } from 'react-hook-form';
import { IPagesDetailForm } from '../types';

export const usePagesDetailForm = (formData: IPagesDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
