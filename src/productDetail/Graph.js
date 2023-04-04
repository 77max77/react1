import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
const Chart = (props) => {
  const maxBarSize = 500;
  const sectionSize = maxBarSize / 3;
  
  function barColor(value) {
    if (value > 500) {
      return '#33adff';
    } else if (value < 500) {
      return '#ff1a1a';
    } else {
      return '#29a329';
    }
  }

  useEffect(() => {
    window.addEventListener('load', () => {
      props.setFilledSize(maxBarSize);
    });
  }, []);
  
  return (
    <div style={{ display: "flex", alignItems: "center" ,marginBottom:70}}>
      <Typography sx={{ mr: 2 }}>{props.nname}</Typography>
      <div 
        style={{
          width: maxBarSize + "px",
          height: "30px",
          border: "2px solid black",
          borderRadius: "10px",
          position: "relative"
        }}
      >
        <div 
          style={{
            width: props.filledSize / 2 + "px",
            height: "30px",
            backgroundColor: barColor(props.filledSize),
            borderRadius: "10px"
          }}
        />
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: sectionSize + "px",
            width: "3px",
            height: "30px",
            backgroundColor: "black"
          }}
        />
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: sectionSize * 2 + "px",
            width: "3px",
            height: "30px",
            backgroundColor: "black"
          }}
        />
      </div> 
      <Typography sx={{ ml: 2 }}>
        {props.filledSize}
        {props.unit}
      </Typography>
    </div>
  );
};

export default Chart;
/*
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'Page A', ub: 300 },
  { name: 'Page B', ub: 400 },
  { name: 'Page C', ub: 500 },
  { name: 'Page D', ub: 600 },
  { name: 'Page E', ub: 700 },
  { name: 'Page F', ub: 800 }
];

function barColor(value) {
  if (value > 500) {
    return 'blue';
  } else if (value < 500) {
    return 'red';
  } else {
    return 'green';
  }
}

export default function Chart() {
  return (
    <BarChart width={1000} height={500} data={data} layout="vertical">
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      {Object.keys(data[0])
        .filter((key) => key.startsWith('ub'))
        .map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill={ barColor('ub')}
            barSize={30}
          />
        ))}
    </BarChart>
  );
}
*/