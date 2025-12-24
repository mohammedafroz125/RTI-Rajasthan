import React from 'react';

interface Testimonial {
  name: string;
  designation: string;
  initials: string;
  rating: number;
  text: string;
}

export const RajasthanTestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      designation: 'Software Engineer, Mumbai, Maharashtra',
      initials: 'RK',
      rating: 5,
      text: 'FileMyRTI helped me get my property documents in just 15 days. The process was transparent and professional.'
    },
    {
      name: 'Priya Sharma',
      designation: 'Teacher, Delhi',
      initials: 'PS',
      rating: 5,
      text: 'I was struggling with my passport delay for months. FileMyRTI resolved it quickly with proper RTI filing.'
    },
    {
      name: 'Arun Patel',
      designation: 'Business Owner, Ahmedabad, Gujarat',
      initials: 'AP',
      rating: 5,
      text: 'Excellent service! Got my business license verification done without any hassle. Highly recommended.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from thousands of satisfied users who got their information through RTI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
