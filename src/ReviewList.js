
import * as React from 'react';
import ReviewCard from './ReviewCard'
import Card from '@mui/material/Card';
import BasicPagination from './Pagination'
import Container from '@mui/material/Container';
export default function AlignItemsList() {
    return (
      <Card sx={{ bgcolor: '#fafafa', color: 'background.paper', p: 2 }}>
          {reviews.map(review) => {
            return <ReviewCard key={`key-${review.q}`} review={review} />;
          })}
          <Container fixed  sx={{
            width: 390,
            display: 'flex',
            alignItems: 'center',
          }}>
        <BasicPagination ></BasicPagination>  
        </Container>
      </Card>
    );
  }