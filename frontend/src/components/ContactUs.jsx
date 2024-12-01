const ContactUsSection = () => {
    return (
      <section id="contactUs" className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Contact Information Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Contact <span className="text-blue-500">Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Have any questions or inquiries? Wed love to hear from you! Feel free to reach out to us using the form below or contact us directly via the information provided.
            </p>
  
            {/* Contact Info */}
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone-alt text-blue-500"></i>
                <p className="text-lg text-gray-600 dark:text-gray-400">+1 (234) 567-890</p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-blue-500"></i>
                <p className="text-lg text-gray-600 dark:text-gray-400">contact@stockheaven.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-blue-500"></i>
                <p className="text-lg text-gray-600 dark:text-gray-400">1234 Stock Lane, Finance City</p>
              </div>
            </div>
          </div>
  
          {/* Contact Form Section */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-900 dark:text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-2 p-4 w-full border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUsSection;
  