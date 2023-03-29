import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'Page A', v0: 300 },
  { name: 'Page B', v1: 400 },
  { name: 'Page C', v2: 500 },
  { name: 'Page D', v3: 600 },
  { name: 'Page E', v4: 700 },
  { name: 'Page F', v5: 800 }

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
      <Bar dataKey="v0" fill={barColor(data[0].v0)} barSize={30} />
      <Bar dataKey="v1" fill={barColor(data[1].v1)} barSize={30} />
      <Bar dataKey="v2" fill={barColor(data[2].v2)} barSize={30} />
      <Bar dataKey="v3" fill={barColor(data[3].v3)} barSize={30} />
      <Bar dataKey="v4" fill={barColor(data[4].v4)} barSize={30} />
      <Bar dataKey="v5" fill={barColor(data[5].v5)} barSize={30} />
    </BarChart>
  );
}