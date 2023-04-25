import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


export default function FifthCard() {
  
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Review:', review);
    console.log('Rating:', rating);
    // handle form submission here
  };

  return (
        React.createElement('form', { onSubmit: handleSubmit},
        React.createElement(TextField, {
          label: 'Title',
          variant: 'outlined',
          
          value: title,
          onChange: (event) => setTitle(event.target.value),
        }), 
        React.createElement(Box, { component: 'fieldset', borderColor: 'transparent' },
          React.createElement(Typography, { component: 'legend' }, '별점:'),
          React.createElement(Rating, {
            name: 'rating',
            value: rating,
            onChange: (event, newValue) => setRating(newValue),
          })
        ),
        React.createElement(TextField, {
          label: 'Review',
          variant: 'outlined',
          multiline: true,
       
          rows: 4,
          value: review,
          onChange: (event) => setReview(event.target.value), style: { width: 800 },
        }),
        React.createElement(Button, { variant: 'contained', color: 'primary', type: 'submit',style: { width: 300, height: 50 } }, 'Submit')
    )
  );
}
/*
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          상품평
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="center">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
*/