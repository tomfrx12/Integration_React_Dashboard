import { Cell, Pie, PieChart } from 'recharts';
import PropTypes from 'prop-types';

const chartData = [
  { name: 'A', value: 80, color: '#ff0000' },
  { name: 'B', value: 45, color: '#D3D3D3' },
];

export default function StraightAnglePieChart({text}) {
  const cx = 70;
  const cy = 70;
  const iR = 20;
  const oR = 50;

  return (
    <>
      <PieChart width={150} height={100}>
        <Pie
          startAngle={180}
          endAngle={0}
          data={chartData}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          stroke="none"
        >
          {chartData.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
      <p>{text}</p>
      </PieChart>
    </>
  );
}

StraightAnglePieChart.propTypes = {
  text: PropTypes.string
};
