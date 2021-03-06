import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
import MuiTextField from '@mui/material/TextField';

interface Props {
  autoFocus: boolean;
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  helperText: string;
  label: string;
  multiline: boolean;
  placeholder?: string;
  required: boolean;
  variant: 'filled' | 'outlined' | 'standard';
  width: number | string;
  height: number;
}

export function TextField(props: Props): JSX.Element {
  const { width, height, ...other } = props;
  const style: React.CSSProperties = {};

  return <MuiTextField style={style} {...other} />;
}

TextField.defaultProps = {
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: true,
  helperText: '',
  label: 'TextField',
  multiline: false,
  required: false,
  variant: 'outlined' as 'outlined',
  width: 280,
  height: 56,
};

addPropertyControls(TextField, {
  autoFocus: {
    type: ControlType.Boolean,
    title: 'Auto focus',
  },
  disabled: {
    type: ControlType.Boolean,
    title: 'Disabled',
  },
  error: {
    type: ControlType.Boolean,
    title: 'Error',
  },
  fullWidth: {
    type: ControlType.Boolean,
    title: 'Full width',
  },
  helperText: {
    type: ControlType.String,
    title: 'Helper text',
  },
  label: {
    type: ControlType.String,
    title: 'Label',
  },
  multiline: {
    type: ControlType.Boolean,
    title: 'Multiline',
  },
  placeholder: {
    type: ControlType.String,
    title: 'Placeholder',
  },
  required: {
    type: ControlType.Boolean,
    title: 'Required',
  },
  variant: {
    type: ControlType.Enum,
    title: 'Variant',
    options: ['filled', 'outlined', 'standard'],
  },
});
