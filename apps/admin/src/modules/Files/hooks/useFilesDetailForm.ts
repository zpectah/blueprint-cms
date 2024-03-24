import { useForm } from 'react-hook-form';
import { IFilesDetailForm } from '../types';

export const useFilesDetailForm = (formData: IFilesDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
