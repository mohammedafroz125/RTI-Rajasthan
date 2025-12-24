import React from 'react';
import { useNavigate } from 'react-router-dom';
import SOFIcon from '../../assets/images/SOFIcon.webp';
import AnonyIcon from '../../assets/images/AnonyIcon.webp';
import FirstIcon from '../../assets/images/FirstIcon.webp';
import BulkIcon from '../../assets/images/BulkIcon.webp';
import CustomIcon from '../../assets/images/CustomIcon.webp';
import Icon15min from '../../assets/images/15minIcon.webp';

interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  route: string;
  buttonText: string;
}

export const RajasthanAllServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const rtiServices: Service[] = [
    {
      id: '1',
      name: 'Seamless Online Filing',
      icon: SOFIcon,
      description: 'File RTI applications online easily with expert drafting, submission, and timely dispatch.',
      route: '/services/seamless-online-filing',
      buttonText: 'File Now',
    },
    {
      id: '2',
      name: 'Anonymous RTI Filing',
      icon: AnonyIcon,
      description: 'Protect your identity with our discreet service for filing RTI applications on your behalf.',
      route: '/services/anonymous',
      buttonText: 'Start Anonymously',
    },
    {
      id: '3',
      name: 'Online First Appeal Filing',
      icon: FirstIcon,
      description: 'File your First Appeal online with expert drafting, review, and quick submission.',
      route: '/services/1st-appeal',
      buttonText: 'Appeal Now',
    },
    {
      id: '4',
      name: 'Efficient Bulk RTI Filing',
      icon: BulkIcon,
      description: 'Manage and submit multiple RTI applications efficiently with our professional bulk service.',
      route: '/services/bulk',
      buttonText: 'Request Quote',
    },
    {
      id: '5',
      name: 'Custom RTI',
      icon: CustomIcon,
      description: 'Can\'t find the right RTI? Create a personalized application designed for your exact information need.',
      route: '/services/custom-rti',
      buttonText: 'Custom RTI',
    },
    {
      id: '6',
      name: '15 min RTI',
      icon: Icon15min,
      description: 'Get personalized advice from legal experts to navigate complex RTI applications effectively.',
      route: '/services/15-minute-consultation',
      buttonText: 'Pay Now',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our RTI Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional RTI filing services for all your information needs across different government departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rtiServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  loading="lazy"
                  decoding="async"
                  width="60"
                  height="60"
                  alt={service.name}
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.name}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              <button
                onClick={() => navigate(service.route)}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
