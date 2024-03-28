import { useForm } from 'react-hook-form';
import { IMessagesDetailForm } from '../../../types';

export const useMessagesDetailForm = (formData: IMessagesDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
