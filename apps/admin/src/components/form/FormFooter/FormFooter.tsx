import React from 'react';
import { SPACING_BASE } from '../../../styles';
import { FormBlock, FormBlockProps } from '../FormBlock';

export interface FormFooterProps extends FormBlockProps {
  justify?: 'start' | 'center' | 'end' | 'between';
  dense?: boolean;
}

const FormFooter = (props: FormFooterProps) => {
  const { children, justify = 'between', boxProps, dense = true, ...rest } = props;

  const justifyContent = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
  };
  const denseOffset = dense ? SPACING_BASE : `calc(${SPACING_BASE} * 2)`;

  return (
    <FormBlock
      boxProps={{
        ...boxProps,
        sx: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: justifyContent[justify],
          paddingTop: denseOffset,
          paddingBottom: denseOffset,
          gap: denseOffset,
          ...boxProps?.sx,
        },
      }}
      {...rest}
    >
      {children}
    </FormBlock>
  );
};

export default FormFooter;
