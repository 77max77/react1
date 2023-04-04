
import * as React from 'react';
import ReviewCard from './ReviewCard'
import Card from '@mui/material/Card';
import BasicPagination from './Pagination'
import {useState} from 'react';
import Container from '@mui/material/Container';
export default function AlignItemsList() {
  const [reviews, setreviews] = useState([
    { usname: "홍길동", rscore: 5, text: "너무 너무 좋아" },
    { usname: "장보고", rscore: 4.5, text: "굳" },
    { usname: "이순신", rscore: 3, text: "별로였으" },
  ]);
    return (
      
      <Card sx={{ bgcolor: '#fafafa', color: 'background.paper', p: 2 }}>
          {reviews.map((review)=>(
          <ReviewCard
            key={review.usname}
            usname={review.usname}
            rscore={review.rscore}
            text={review.text}
          />
          ))}

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