import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export function BasicChips(props) {
  
    return (
      <Stack sx={{ml:3,}} direction="row" spacing={1}>
        <Chip label={props.affect}  variant="outlined"/>
      </Stack>
    );
  }
  
export function BasicChips2(props) {
    return (
      <Stack sx={{ml:3}} direction="row" spacing={1}>
        <Chip label={props.times}  />
      </Stack>
    );
  }