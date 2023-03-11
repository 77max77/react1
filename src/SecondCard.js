import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicChips from './BasicChips'

export default function SecondCard() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20 }}  gutterBottom>
            주요 기능
          </Typography>
          <BasicChips ></BasicChips>
          <Typography variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20 }}  gutterBottom>
            보조 기능
          </Typography>
          <BasicChips ></BasicChips>
        </CardContent>
      </Card>
    );
  }