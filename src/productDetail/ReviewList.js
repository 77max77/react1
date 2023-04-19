import * as React from 'react';
import ReviewCard from './ReviewCard';
import Card from '@mui/material/Card';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

export default function AlignItemsList() {
  const [reviews, setReviews] = useState([
    { usname: "Hong Gil-dong", rscore: 5, text: "I love you so much" },
    { usname: "Jang Bo-go", rscore: 4.5, text: "Good" },
    { usname: "Yi Soon-sin", rscore: 3, text: "Not so good" },
    { usname: "John Doe", rscore: 2, text: "Terrible" },
    { usname: "Jane Doe", rscore: 4, text: "Okay" },
    { usname: "Mark Smith", rscore: 3.5, text: "Average" },
    { usname: "Sarah Johnson", rscore: 5, text: "Amazing" },
    { usname: "Hong Gil-dong", rscore: 5, text: "I love you so much" },
    { usname: "Jang Bo-go", rscore: 4.5, text: "Good" },
    { usname: "Yi Soon-sin", rscore: 3, text: "Not so good" },
    { usname: "John Doe", rscore: 2, text: "Terrible" },
    { usname: "Jane Doe", rscore: 4, text: "Okay" },
    { usname: "Mark Smith", rscore: 3.5, text: "Average" },
    { usname: "Sarah Johnson", rscore: 5, text: "Amazing" },
    { usname: "Hong Gil-dong", rscore: 5, text: "I love you so much" },
    { usname: "Jang Bo-go", rscore: 4.5, text: "Good" },
    { usname: "Yi Soon-sin", rscore: 3, text: "Not so good" },
    { usname: "John Doe", rscore: 2, text: "Terrible" },
    { usname: "Jane Doe", rscore: 4, text: "Okay" },
    { usname: "Mark Smith", rscore: 3.5, text: "Average" },
    { usname: "Sarah Johnson", rscore: 5, text: "Amazing" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);

  const totalReviews = reviews.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Card sx={{ bgcolor: '#fafafa', color: 'background. paper', p: 2 }}>
      {currentReviews.map((review) => (
        <ReviewCard key={review.usname} usname={review.usname} rscore={review.rscore} text={review.text} />
      ))}
      <Container fixed sx={{ width: 390, display: 'flex', alignItems: 'center' }}>
        <Stack spacing={2}>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
        </Stack>
      </Container>
    </Card>
  );
}