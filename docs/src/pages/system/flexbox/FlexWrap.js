import * as React from 'react';
import Box from '@mui/material/Box';

export default function FlexWrap() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 300,
        }}
      >
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 1</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 2</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 3</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 4</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 5</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 6</Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 300,
        }}
      >
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 1</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 2</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 3</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 4</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 5</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 6</Box>
      </Box>
    </div>
  );
}
