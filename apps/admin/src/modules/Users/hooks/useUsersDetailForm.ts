import { useForm } from 'react-hook-form';
import { IUsersDetailForm } from '../types';

export const useUsersDetailForm = (formData: IUsersDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
