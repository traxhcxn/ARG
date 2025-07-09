import React from 'react';
import features from '../data/static/featureList';
import { FeatureCard } from '../components/Cards';

function FeatureContainer() {
  return (
    <div className="w-full max-w-6xl mx-auto px-12 py-10 rounded-3xl bg-white/70 backdrop-blur-md border border-[#C0C9EE] shadow-xl">
      {/* headline */}
      <header className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F2343] mb-2 drop-shadow-sm">
          Revolutionize your Annual Reporting
        </h2>
        <p className="text-base md:text-lg text-[#1F2343]">
          Empowering institutions to elevate their annual reporting with seamless solutions.
        </p>
      </header>

      {/* feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
        {features.map(f => (
          <div
            key={f.id}
            className="h-full rounded-2xl p-[2px] bg-gradient-to-br from-[#8CCDEB] via-[#C0C9EE] to-white"
          >
            <FeatureCard
              featureIcon={f.featureIcon}
              feature={f.feature}
              featureDesc={f.featureDesc}
              className="h-full bg-white rounded-2xl p-6 flex flex-col justify-between shadow hover:shadow-lg transition-shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureContainer;
