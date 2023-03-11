import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import {BasicChips2} from './BasicChips'
import Divider from '@mui/material/Divider';

export default function ThirdCard() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          
          <Grid container>  
            <Grid item xs>
              <Typography  variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20  }} startIcon={<Brightness5Icon/>} gutterBottom>
                아침, 식후
              </Typography>
            </Grid>
            
            <Grid item sx={{ml:3,mt:3,fontSize: 20 }}>
              <BasicChips2 ></BasicChips2>
            </Grid>
          </Grid>

            <Divider sx={{mt:2}} variant="middle" />
            
          <Grid container>
            <Grid item xs>
              <Typography  variant="h3" component="div" sx={{ml:3,mt:3,fontSize: 20 }} startIcon={<NightlightIcon/>}  gutterBottom>
                저녁, 식후
              </Typography>
            </Grid>
            <Grid item sx={{ml:3,mt:3,fontSize: 20 }}>
              <BasicChips2 ></BasicChips2>
            </Grid>
          </Grid>

        </CardContent>
      </Card>
    );
  }