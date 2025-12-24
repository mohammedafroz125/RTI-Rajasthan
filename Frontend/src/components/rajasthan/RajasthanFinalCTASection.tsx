import React from 'react';
import { useNavigate } from 'react-router-dom';

export const RajasthanFinalCTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container-responsive max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide mb-6">Ready to Exercise Your Right to Information?</h2>
        <p className="text-base md:text-lg font-normal mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Join 50,000+ Rajasthan citizens who trust us with their RTI applications.
          Get started today and access government information transparently.
        </p>
        <button
          onClick={() => navigate('/services/custom-rti')}
          className="bg-white text-primary-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg transition-colors shadow-lg"
        >
          FILE YOUR RTI APPLICATION NOW
        </button>
      </div>
    </section>
  );
};
