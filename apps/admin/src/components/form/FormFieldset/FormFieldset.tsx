import React from 'react';
import { styled, Box, Typography } from '@mui/material';
import { SPACING_BASE } from '../../../styles';
import { FieldsetLegendProps, FormFieldsetProps } from './types';

const FieldsetWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING_BASE,
  border: `1px solid ${theme.palette.divider}`,
  padding: `calc(${SPACING_BASE} * 2)`,
}));

const FieldsetLegend = ({ children, ...rest }: FieldsetLegendProps) => (
  <Typography
    variant="body1"
    component="legend"
    sx={({ palette }) => ({
      color: palette.text.secondary,
      margin: 0,
      padding: 0,
      paddingX: SPACING_BASE,
    })}
    {...rest}
  >
    {children}
  </Typography>
);

const FormFieldset = (props: FormFieldsetProps) => {
  const { children, legend, legendProps, boxProps } = props;

  return (
    <FieldsetWrapper component="fieldset" {...boxProps}>
      {legend && <FieldsetLegend {...legendProps}>{legend}</FieldsetLegend>}
      {children}
    </FieldsetWrapper>
  );
};

export default FormFieldset;
