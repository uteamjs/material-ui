import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function FilledMultilineHiddenLabelTextField() {
  return (
    <div>
      <TextField
        variant="filled"
        defaultValue="Multiline Default Value"
        multiline
        rows={1}
        hiddenLabel
      />
      <TextField variant="filled" defaultValue="Default Value" rows={1} hiddenLabel />
    </div>
  );
}
