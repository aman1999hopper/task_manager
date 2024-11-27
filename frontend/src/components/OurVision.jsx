
const OurVision = () => {
  return (
    <section className="flex items-center justify-center py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Section - Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://assets.fyers.in/images/fyers_discover_app/hero_image.webp"
            alt="Our Vision"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Section - Heading and Paragraph */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our vision is to create a brighter future through innovation and
            technology. We aim to empower individuals and organizations to
            achieve their fullest potential by providing them with the tools and
            insights needed to succeed in the modern world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
