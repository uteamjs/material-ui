import * as React from 'react';
import Box from '@mui/material/Box';

export default function FlexDirection() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 1</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 2</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 3</Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 1</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 2</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 3</Box>
      </Box>
    </div>
  );
}
