import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextRating from './TextRating'
import GutterlessList from './Rank'
import BasicList from './CostRank'
import OutlinedButtons from './Button'

export default function FirstCard() {
    return (
        <Card sx={{mt:0,amt:10}}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{mt:5,mr:5}}
          >
          <OutlinedButtons  ></OutlinedButtons>
          </Box>
          <Grid container>
            <Grid item  sx={{mt:0,mb:5,mr:0}}>
              <CardMedia 
              sx={{ml:5, height: 400,width:200 }}
              image="https://questlife.co.kr/web/product/big/202107/f23dcb994e95fc8258874500da0313e2.png"
              //title=
              />
            </Grid >
            <Card sx={{mt:8,mb:5}}>
            <Grid xs item  sx={{mt:3,ml:3,mr:10}}>
              <CardActions sx={{ml:1,mb:2}} >
                <Link  size="large"  color="#78909c">제조사</Link>
              </CardActions>
            <CardContent>
              <Typography variant="h3" sx={{mt:-4,fontSize: 30 }} color="text.secondary" gutterBottom>
              product name
              </Typography>
              <Grid container>
                <Grid item >
                <TextRating ></TextRating>
              </Grid>
              <Grid item sx={{mb:10}} >
                <Link color="#7e57c2">리뷰</Link>
                </Grid>
              </Grid>
              < GutterlessList></ GutterlessList>
            </CardContent>
          </Grid>
          </Card>
            <Grid xs item sx={{mt:0,ml:3}}>
              <Typography  variant="h3" component="div" sx={{ml:0,mr:5,mt:10,fontSize:30 }}   gutterBottom>
              최저가
              </Typography>
              < BasicList></BasicList>
              </Grid>
              <Grid item sx={{mt:0}}>
              <Link variant="h3" component="div" sx={{ml:0,mr:5,mt:10,fontSize:30 }}   gutterBottom>xxxx원</Link>
              </Grid>
          </Grid>
        </Card>
       
    );
  }