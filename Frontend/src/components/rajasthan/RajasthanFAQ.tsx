import React, { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: 'Can I file RTI online in Rajasthan?',
    a: 'Yes, you can file RTI applications for Rajasthan state departments online through FileMyRTI without visiting government offices.',
  },
  {
    q: 'Do I need to visit any government office to file RTI?',
    a: 'No. The RTI filing process can be completed fully online with assistance from FileMyRTI.',
  },
  {
    q: 'What if I don\'t know the correct department?',
    a: 'If you are unsure about the department, your RTI application can still be filed and routed to the appropriate authority.',
  },
  {
    q: 'Can RTI be filed for state government departments in Rajasthan?',
    a: 'Yes, RTI can be filed for Rajasthan state government departments and public authorities.',
  },
  {
    q: 'Is RTI filing available for individual citizens?',
    a: 'Yes, any Indian citizen can file an RTI application.',
  },
  {
    q: 'Can I file RTI from outside Rajasthan?',
    a: 'Yes, you can file an RTI for Rajasthan departments from anywhere in India.',
  },
];

export const RajasthanFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white pt-6 pb-12 md:pt-8 md:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="mb-2 text-[32px] md:text-[36px] font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto h-1 w-24 bg-yellow-500 mb-4"></div>
          <p className="text-lg text-gray-600">
            Everything you need to know about filing RTI in Rajasthan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

