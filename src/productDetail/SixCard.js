import { Card } from '@mui/material';
import Chart from './Graph';
import Container from '@mui/material/Container';

export default function SixCard() {
  return (
    <Card sx={{ minWidth: 1000, mb:2 }}>
        <Container fixed  sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt:2
          }}>
      <Chart />
      </Container>
    </Card>
  );
}