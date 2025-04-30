"use client";

import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "This landing page template exceeded our expectations. The clean design and responsive layout helped us increase our conversion rate by 25%.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "We launched our product using this template and received overwhelmingly positive feedback about the professional look and feel of our site.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      content: "As a designer, I appreciate the attention to detail in this template. The components are well-structured and easy to customize.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people think about our landing page template.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 mr-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 