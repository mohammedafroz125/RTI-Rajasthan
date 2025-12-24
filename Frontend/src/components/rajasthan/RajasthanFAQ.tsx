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
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about filing RTI in Rajasthan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
