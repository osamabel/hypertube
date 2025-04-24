// components/Testimonials.tsx
import React from 'react';

const testimonials = [
  {
    content: "NextApp transformed our workflow completely. We've seen a 40% increase in productivity since implementing it across our team.",
    author: "Sarah Johnson",
    role: "CTO, TechFront",
    avatar: "/api/placeholder/32/32"
  },
  {
    content: "The intuitive interface and powerful features make this the perfect solution for our growing startup. Customer support has been exceptional.",
    author: "Michael Chen",
    role: "Founder, InnovateCo",
    avatar: "/api/placeholder/32/32"
  },
  {
    content: "We evaluated over 10 similar platforms before choosing NextApp. The combination of performance and ease of use is unmatched in the market.",
    author: "Emily Rodriguez",
    role: "Product Manager, ScaleUp",
    avatar: "/api/placeholder/32/32"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their projects with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                {/* <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full mr-4" /> */}
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;