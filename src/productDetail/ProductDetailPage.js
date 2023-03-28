import "/main/school/react-project/react1/src/style.css";
import Container from '@mui/material/Container';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ThirdCard from './ThirdCard'
import SecondCard from './SecondCard'
import FirstCard from './FirstCard'
import AlignItemsList from './ReviewList'
//import ForthCard from './ForthCard'
import FifthCard from './FifthCard'
import SixCard from "./SixCard";

export default function ProductDetail() {
  return (
    <div>
      <Container fixed sx={{mt:5}}>
        <Link fixed size="large"  color="#78909c">제조사</Link>
        -
        <Link fixed size="large"  color="#78909c">product name</Link>
        <FirstCard></FirstCard>
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          이 제품의 효과 
        </Typography>
        <SecondCard></SecondCard>
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          추천 섭취 시간 및 복용법
        </Typography>
        <ThirdCard></ThirdCard>
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          제품 리뷰
        </Typography>
        <AlignItemsList></AlignItemsList> 
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
          리뷰 작성
        </Typography>
        <FifthCard/>
        <Typography fixed sx={{mt:10,mb:5,fontSize:25}}  variant="h3">
        영양제 영양소 확인
        </Typography>
        <SixCard></SixCard>
      </Container>
    </div>
  );
}