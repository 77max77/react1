import { Card } from '@mui/material';
import Chart from './Graph';
import Container from '@mui/material/Container';
import {useState} from 'react'
export default function SixCard() {
  const [vitamins, setVitamins] = useState([
    { nname: "비타민A", unit: "mg", filledSize: 400 },
    { nname: "비타민B", unit: "g", filledSize: 700 },
    { nname: "비타민C", unit: "g", filledSize: 200 },
    { nname: "비타민D", unit: "ml", filledSize: 500 },
    { nname: "비타민E", unit: "g", filledSize: 600 }
  ]);
  return (
    <Card sx={{ minWidth: 275, mb: 5 }}>
      <Container
        fixed
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 10
        }}
      >
        {vitamins.map((vitamin) => (
          <Chart
            key={vitamin.nname}
            filledSize={vitamin.filledSize}
            unit={vitamin.unit}
            nname={vitamin.nname}
            setFilledSize={vitamin.filledSize}
          />
        ))}
      </Container>
    </Card>
  );
}