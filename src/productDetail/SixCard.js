import { Card } from '@mui/material';
import Chart from './Graph';
import Container from '@mui/material/Container';

export default function SixCard() {
  return (
    <Card sx={{ minWidth: 300, mb:5 }}>
        <Container fixed  sx={{
            width: 700,
            display: 'flex',
            alignItems: 'center',mb:2,mt:2
          }}>
      <Chart />
      </Container>
    </Card>
  );
}