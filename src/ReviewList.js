import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {TextRating2} from './TextRating'
import BasicPagination from './Pagination'
import Container from '@mui/material/Container';

//리뷰

export default function AlignItemsList() {
    return (
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="username"
            secondary={
              <React.Fragment>
                
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                <TextRating2></TextRating2>
                </Typography>
                
                {"text"}

              <CardMedia 
                sx={{ml:5, height: 300,width:300 }}
                //사진 
                image="https://cdn.snapfit.co.kr/review/contents/stores/questlife/20221030/medium_9e0a2b8226a8c47d432c2d0ef867895c.jpg"
                //title=
              />
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <Container fixed  sx={{
          width: 390,
          display: 'flex',
          alignItems: 'center',
        }}>
      <BasicPagination ></BasicPagination>  
      </Container>
      </List>
    );
  }