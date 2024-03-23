import { useForm } from 'react-hook-form';
import { LOGIN_FORM_DEFAULTS } from './constants';

export const useLoginForm = () => {
  const form = useForm({
    defaultValues: Object.assign(LOGIN_FORM_DEFAULTS),
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return {
    ...form,
  };
};
