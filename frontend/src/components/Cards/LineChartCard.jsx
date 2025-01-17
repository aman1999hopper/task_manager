
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const LineChartCard = ({ data, title, percentage }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mt-5">
      <h3 className="text-lg dark:text-white font-bold mb-2">{title}</h3>
      <div className="h-48">
        <Bar data={chartData} options={options} />
      </div>
      <div className="mt-4 flex items-center">
        <span className={`font-medium ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
        </span>
        <span className="text-gray-500 dark:text-white ml-1">Revenue</span>
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