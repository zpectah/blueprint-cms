import { useForm } from 'react-hook-form';
import { ITranslationsDetailForm } from '../../../types';

export const useTranslationsDetailForm = (formData: ITranslationsDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
