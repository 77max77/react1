import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const text=""
const text2=""
export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Typography  color="success" variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 30  }} gutterBottom>
            Q.
            {text}
      </Typography>
      <Typography  color="success" variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 30  }} gutterBottom>
            A.
            {text2}
      </Typography>
      <Divider sx={{mt:2}} variant="middle" />
    </Card>
  );
}