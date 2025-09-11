import { BarChart } from '@mui/x-charts/BarChart';

const dataset = [
  { month: 'Lundi', A1: 12, A2: 15, A3: 10, M1: 8, M2: 7 },
  { month: 'Mardi', A1: 14, A2: 13, A3: 12, M1: 9, M2: 6 },
  { month: 'Mercredi', A1: 16, A2: 17, A3: 14, M1: 10, M2: 8 },
  { month: 'Jeudi', A1: 13, A2: 14, A3: 11, M1: 7, M2: 5 },
  { month: 'Vendredi', A1: 15, A2: 16, A3: 13, M1: 11, M2: 9 },
];

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Student Here (by promo)',
      width: 60,
    },
  ],
  height: 300,
};

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[
        { dataKey: 'A1', label: 'A1', valueFormatter },
        { dataKey: 'A2', label: 'A2', valueFormatter },
        { dataKey: 'A3', label: 'A3', valueFormatter },
        { dataKey: 'M1', label: 'M1', valueFormatter },
        { dataKey: 'M2', label: 'M2', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}