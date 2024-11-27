const TestimonialSection = () => {
    const testimonials = [
      {
        name: "John Doe",
        image:
          "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        description:
          "StockHeaven helped me make smarter investment decisions. Their tools and insights are invaluable.",
      },
      {
        name: "Jane Smith",
        image: "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=",
        description:
          "I love the platform! It’s easy to use and provides all the data I need to analyze stocks effectively.",
      },
      {
        name: "Mike Johnson",
        image: "https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA=",
        description:
          "The analytics and market insights have really helped me grow my investment portfolio. Highly recommend!",
      },
    ];
  
    return (
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-80 h-96 transform transition-all hover:scale-105 hover:shadow-xl"
              >
                {/* Full-size image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay for text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-200">{testimonial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;
  