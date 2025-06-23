import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Fruit() {

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { mt: 4, width: '50ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search a fruit" variant="outlined" />
    </Box>
  );
}
