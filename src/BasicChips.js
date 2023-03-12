import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
//var chiptext1=""


export function BasicChips() {
  
    return (
      <Stack sx={{ml:3}}direction="row" spacing={1}>
        <Chip label="text"  variant="outlined"/>
        <Chip label="text" variant="outlined" />
      </Stack>
    );
  }
  
export function BasicChips2() {
    return (
      <Stack sx={{ml:3}}direction="row" spacing={1}>
        <Chip label="text"  />
      </Stack>
    );
  }