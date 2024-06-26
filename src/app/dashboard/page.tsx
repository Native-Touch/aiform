'use client';
import Link from "next/link";
import style from "../../styles/index.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400,},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210,},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290,},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000,},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181,},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500,},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100,},
];

export default function HomePage() {
  return (
    <div className={style.parent}>
      <div className={`${style.div1} border rounded`}>
      <p className={`text-xl font-semibold pb-2`}>Form Responses</p>
      <ResponsiveContainer width="90%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className={`${style.div2} border rounded`}>
      <p className={`text-xl font-semibold pb-2`}>Form Views</p>
      <ResponsiveContainer width="90%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className={`${style.div3} border rounded`}> 
      <p className={`text-xl font-semibold`}>Recent Forms</p>
      </div>
      <div className={`${style.div4} border rounded`}> 
      <p className={`text-xl font-semibold`}>Pinned</p>
      </div>
    </div>
  );
}
