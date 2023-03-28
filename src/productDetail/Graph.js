import { BarChart,ReferenceLine, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page A', uv: 400},
{name: 'Page B', uv: 500},
{name: 'Page C', uv: 600},
{name: 'Page D', uv: 700},
{name: 'Page E', uv: 800},
{name: 'Page F', uv: 900 }];

export default function Chart(){
  return (

    <BarChart width={1000} height={500} data={data} layout="vertical">
    <XAxis type="number" />
    <YAxis dataKey="name" type="category" />
    <Tooltip wrapperStyle={{ shared: true,
          intersect: false, width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    <ReferenceLine x={500} stroke="green" />
  </BarChart>
);
}
