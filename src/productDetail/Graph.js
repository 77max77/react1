import React, { useState, useEffect } from 'react';

const Chart = () => {
  const [filledSize, setFilledSize] = useState(500);
  const maxBarSize = 500;
  const sectionSize = maxBarSize / 3;
  
  function barColor(value) {
    if (value > 500) {
      return 'blue';
    } else if (value < 500) {
      return 'red';
    } else {
      return 'green';
    }
  }

  useEffect(() => {
    window.addEventListener('load', () => {
      setFilledSize(maxBarSize);
    });
  }, []);
  const pname = "비타민C"
  return (
    <>
      {pname}
      <div style=
      {{ width: maxBarSize + 'px', 
      height: '30px', 
      border: '2px solid black', 
      borderRadius: '10px', 
      position: 'relative' }}>
        <div style=
        {{ width: filledSize/2 + 'px', 
        height: '30px', 
        backgroundColor: barColor(filledSize), 
        borderRadius: '10px' }} />
        <div style=
        {{ position: 'absolute', 
        top: 0, 
        left: sectionSize + 'px', 
        width: '2px', 
        height: '30px', 
        backgroundColor: 'black' }} />
        <div style=
        {{ position: 'absolute', 
        top: 0, 
        left: sectionSize * 2 + 'px', 
        width: '2px', 
        height: '30px', 
        backgroundColor: 'black' }} />
      </div>
      <div>{filledSize}</div>
    </>
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