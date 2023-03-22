import * as React from 'react';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import InputWithIcon from './WriteReview'
import BasicRating from './Basicrating'
export default function FifthCard() {
    return (
      <Card sx={{ minWidth: 275, mb:5 }}>
      <Container fixed  sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }}>
        <BasicRating />    
        </Container>
        <Container fixed  sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }}>
        <InputWithIcon />
        </Container>
      </Card>
    );
  }