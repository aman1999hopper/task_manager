const AboutUsSection = () => {
  return (
    <section id="aboutUs" className="bg-gray-50 dark:bg-gray-900 py-16">
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

        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-500">TaskFlow</span>{" "}
            {/* Replace with your app name */}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            At TaskVerse, we’re on a mission to redefine how individuals and
            teams manage their daily work. Our platform is designed to bring
            clarity, control, and confidence to your workflow.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Whether you’re tracking personal goals or managing complex team
            projects, TaskVerse helps you stay focused, organized, and
            productive—every step of the way.
          </p>

          {/* Highlight Points */}
          <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-400">
            <li className="mb-3">
              Powerful task tracking and smart scheduling features.
            </li>
            <li className="mb-3">
              Intuitive interface designed for productivity.
            </li>
            <li>Built to help you stay in control and accomplish more.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
