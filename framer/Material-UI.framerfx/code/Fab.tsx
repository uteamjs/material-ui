import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
import MuiFab from '@mui/material/Fab';
import { Icon } from './Icon';

interface Props {
  disabled: boolean;
  href?: string;
  icon: string;
  iconTheme: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  label: string;
  width: number | string;
  height: number;
}

export function Fab(props: Props): JSX.Element {
  // @ts-ignore
  const { height, icon, label, iconTheme, variant, width, ...other } = props;
  return (
    <MuiFab variant={variant} {...other}>
      <Icon
        icon={icon}
        theme={iconTheme}
        style={variant === 'extended' ? { marginRight: 8 } : {}}
      />
      {variant === 'extended' ? label : null}
    </MuiFab>
  );
}

Fab.defaultProps = {
  disabled: false,
  icon: 'add',
  iconTheme: 'Filled' as 'Filled',
  label: 'extended',
  width: 56,
  height: 56,
};

addPropertyControls(Fab, {
  disabled: {
    type: ControlType.Boolean,
    title: 'Disabled',
  },
  href: {
    type: ControlType.String,
    title: 'Href',
  },
  icon: {
    type: ControlType.String,
    title: 'Icon',
  },
  iconTheme: {
    type: ControlType.Enum,
    title: 'Icon theme',
    options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  },
  label: {
    type: ControlType.String,
    title: 'Label',
  },
});
