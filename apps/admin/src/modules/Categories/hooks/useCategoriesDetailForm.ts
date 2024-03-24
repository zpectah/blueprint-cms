import { useForm } from 'react-hook-form';
import { ICategoriesDetailForm } from '../types';

export const useCategoriesDetailForm = (formData: ICategoriesDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
