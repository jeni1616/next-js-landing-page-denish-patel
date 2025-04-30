"use client";

import { CheckIcon } from './Icons';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "49",
      features: [
        "1 landing page",
        "Basic components",
        "Email support",
        "1 month free updates",
      ],
      recommended: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "99",
      features: [
        "5 landing pages",
        "Advanced components",
        "Priority email support",
        "6 months free updates",
        "Custom branding",
      ],
      recommended: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "249",
      features: [
        "Unlimited landing pages",
        "Premium components",
        "24/7 phone support",
        "Lifetime free updates",
        "Custom branding",
        "Advanced analytics",
      ],
      recommended: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl ${
                plan.recommended ? 'ring-2 ring-indigo-600 scale-105 md:scale-110' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
                  Recommended
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-gray-800">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-indigo-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  plan.recommended 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 