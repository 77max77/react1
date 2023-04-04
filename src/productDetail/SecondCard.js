import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {BasicChips} from './BasicChips'
import {useState} from 'react'
export default function SecondCard() {
  const [affects, setmAffect] = useState(
    ["피로해소","눈떨림"]
   
  );
    return (
      <Card sx={{ minWidth: 275, }}> 
        <Typography variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20 }}  gutterBottom>
          복용효과
        </Typography>
        <CardContent sx={{display:"flex",flexDirection:"row"}}>
         
        {affects.map((item,idx) => (
          <BasicChips 
            affect={item}
          />
        ))}
        </CardContent>
      </Card>
    );
  }