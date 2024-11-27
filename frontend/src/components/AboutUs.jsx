const AboutUsSection = () => {
    return (
      <section id="about-us" className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full relative">
            <img
              src="https://media.istockphoto.com/id/2148676092/photo/stock-market-data-and-investment-concept-financial-growth-graph-stock-market-candlestick-bars.jpg?s=612x612&w=0&k=20&c=1ESbma-89wvqCr-JfGmAprTA_MspBrn98HJAYINnKRg=" // Replace with an actual image
              alt="About Us"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            {/* Decorative Overlay */}
            <div className="absolute top-4 left-4 w-36 h-36 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-green-500 opacity-20 rounded-full blur-xl"></div>
          </div>
  
          {/* Content Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-500">StockHeaven</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              At StockHeaven, we’re passionate about helping individuals and
              organizations navigate the complexities of the stock market. Our
              mission is to empower our users with advanced tools, actionable
              insights, and unparalleled support to achieve their financial
              dreams.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We believe in leveraging innovation and technology to simplify
              investments and provide access to data that drives informed
              decision-making.
            </p>
  
            {/* Highlight Points */}
            <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-400">
              <li className="mb-3">
                Cutting-edge analytics and tools for stock market insights.
              </li>
              <li className="mb-3">A user-friendly platform for all investors.</li>
              <li>Dedicated to helping you achieve financial success.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;
  