import { useForm } from 'react-hook-form';
import { IMenusDetailForm } from '../types';

export const useMenusDetailForm = (formData: IMenusDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
