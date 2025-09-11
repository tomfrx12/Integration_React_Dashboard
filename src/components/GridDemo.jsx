import { BarChart } from '@mui/x-charts/BarChart';

const dataset = [
  { note: 'HTTPS/CSS', moyenne: 15 },
  { note: 'REACT', moyenne: 19 },
  { note: 'WORDPRESS', moyenne: 12 },
];

const valueFormatter = (value) => `${value} /20`;

const chartSetting = {
  xAxis: [{ label: 'Moyennes (Par Notes)' }],
  height: 200,
  margin: { left: 0 },
};

export default function GridDemo() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'note' }]}
      series={[{ dataKey: 'moyenne', label: 'Moyennes (Par Notes)', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}