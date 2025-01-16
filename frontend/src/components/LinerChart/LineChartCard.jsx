import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChartCard = ({ data, title, percentage }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.values,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="h-32">
        <Line data={chartData} options={options} />
      </div>
      <div className="mt-4 flex items-center">
        <span className={`font-medium ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
        </span>
        <span className="text-gray-500 ml-1">Revenue</span>
      </div>
    </div>
  );
};

LineChartCard.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default LineChartCard;