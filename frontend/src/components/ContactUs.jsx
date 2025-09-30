import { useState } from "react";
import { toast } from "react-toastify";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Our team will contact you shortly!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Server error. Try again later!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactUs" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Contact Information Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Have any questions or inquiries? Wed love to hear from you! Feel
            free to reach out to us using the form below or contact us directly
            via the information provided.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-4">
              <i className="fas fa-phone-alt text-blue-500"></i>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                9829315931
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-envelope text-blue-500"></i>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                aman@stockheaven.com
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-map-marker-alt text-blue-500"></i>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                1234 Stock Lane, Finance City
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className="mt-2 p-4 w-full border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-4 w-full border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-900 dark:text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-4 w-full border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
               <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
