"use client";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
        <p className="text-indigo-100 max-w-xl mx-auto mb-8">
          Join thousands of satisfied customers using our landing page template to grow their business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md">
            Get Started
          </button>
          <button className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA; 