import React from 'react';
import { ElementProps } from '@blueprint/types';

export type FormProps = ElementProps<'form'>;

const Form = (props: FormProps) => {
  const { children, ...rest } = props;

  return <form {...rest}>{children}</form>;
};

export default Form;
