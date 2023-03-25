import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 500, pv: 2400, amt: 2400},
{name: 'Page C', uv: 600, pv: 2400, amt: 2400},
{name: 'Page D', uv: 700, pv: 2400, amt: 2400},
{name: 'Page E', uv: 800, pv: 2400, amt: 2400},
{name: 'Page F', uv: 900, pv: 2400, amt: 2400}];

export default function Chart(){
  return (

  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
);
  }