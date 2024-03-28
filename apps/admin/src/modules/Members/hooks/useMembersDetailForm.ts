import { useForm } from 'react-hook-form';
import { IMembersDetailForm } from '../../../types';

export const useMembersDetailForm = (formData: IMembersDetailForm) => {
  const form = useForm({
    defaultValues: Object.assign(formData),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
