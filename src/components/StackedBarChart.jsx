import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Lundi',
    DW: 40,
    CG: 40,
    CD: 40,
    MD: 40,
    M2: 40
  },
  {
    name: 'Mardi',
    DW: 40,
    CG: 40,
    CD: 40,
    MD: 40,
    M2: 40
  },
  {
    name: 'Mercredi',
    DW: 40,
    CG: 40,
    CD: 40,
    MD: 40,
    M2: 40
  },
  {
    name: 'Jeudi',
    DW: 40,
    CG: 40,
    CD: 40,
    MD: 40,
    M2: 40
  },
  {
    name: 'Vendredi',
    DW: 40,
    CG: 40,
    CD: 40,
    MD: 40,
    M2: 40
  },
];

const StackedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="89%">
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 20,
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
        <Bar dataKey="DW" stackId="a" fill="#8884d8" />
        <Bar dataKey="CG" stackId="a" fill="#82ca9d" />
        <Bar dataKey="CD" stackId="a" fill="#ff0000" />
        <Bar dataKey="MD" stackId="a" fill="#ffca28" />

      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
