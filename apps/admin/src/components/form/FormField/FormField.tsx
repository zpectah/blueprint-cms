import React from 'react';
import { styled, Box, FormLabel, Typography, BoxProps } from '@mui/material';
import { SPACING_BASE } from '../../../styles';
import { FormFieldProps, FormFieldMessageSeverity } from './types';

const FieldWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: `calc(${SPACING_BASE} / 2)`,
});
const FieldLabel = styled(FormLabel)({
  width: '100%',
});
const FieldContent = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: `calc(${SPACING_BASE} / 2)`,
});
const FieldInput = styled(Box)({
  width: '100%',
  display: 'flex',
  // flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: `calc(${SPACING_BASE} / 2)`,
});
const FieldMessages = styled(Box)({});
const FieldMessageItem = styled(Typography, {
  shouldForwardProp: (propName) => propName !== 'isMobile' && propName !== 'open',
})<{ readonly severity: FormFieldMessageSeverity }>(({ severity, theme }) => {
  let color;

  switch (severity) {
    case 'success':
      color = theme.palette.success.main;
      break;

    case 'warning':
      color = theme.palette.warning.main;
      break;

    case 'error':
      color = theme.palette.error.main;
      break;

    case 'default':
    default:
      color = theme.palette.text.secondary;
      break;
  }

  return {
    display: 'block',
    color,
  };
});

const FormField = (props: FormFieldProps) => {
  const { children, label, fieldId, helperTexts = [], helperTextProps, inputBoxProps } = props;

  const inputBoxComposedProps: Partial<BoxProps> = {
    ...inputBoxProps,
    sx: {
      flexDirection: 'row',
      ...inputBoxProps?.sx,
    },
  };

  return (
    <FieldWrapper>
      {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
      <FieldContent>
        <FieldInput {...inputBoxComposedProps}>{children}</FieldInput>
        {helperTexts.length > 0 && (
          <FieldMessages>
            {helperTexts.map(({ severity = 'default', ...text }, index) => (
              <FieldMessageItem key={index} variant="caption" severity={severity} {...helperTextProps} {...text} />
            ))}
          </FieldMessages>
        )}
      </FieldContent>
    </FieldWrapper>
  );
};

export default FormField;
