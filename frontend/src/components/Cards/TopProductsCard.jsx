import PropTypes from 'prop-types';

const TopProductsCard = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg p-4 w-full mt-6">
      <h3 className="text-lg font-bold mb-4">Recent Tasks</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-purple-400 dark:bg-sky-600 text-left">
              <th className="py-2 px-4 border-b border-gray-200">Sr. No</th>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Status</th>
              <th className="py-2 px-4 border-b border-gray-200">Priority</th>
              <th className="py-2 px-4 border-b border-gray-200">Created On</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={product.id} className="hover:bg-gray-50 dark:bg-gray-800 dark:text-white">
                <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                <td className="py-2 px-4 border-b border-gray-200">{product.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{product.price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b border-gray-200">{product.lastTradePrice.toFixed(2)}</td>
                <td className="py-2 px-4 border-b border-gray-200">{product.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TopProductsCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      lastTradePrice: PropTypes.number.isRequired,
      revenue: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TopProductsCard;