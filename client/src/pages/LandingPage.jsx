import React from 'react';
import MainNavBar from '../components/MainNavBar';
import Footer from '../components/Footer';

const FEATURES = [
  {
    img: '/src/assets/icons/dataCollection.png',
    alt: 'Data Collection',
    title: 'Easy Data Collection',
  },
  {
    img: '/src/assets/icons/dataVisual.png',
    alt: 'Visualization',
    title: 'Instant Visualization',
  },
  {
    img: '/src/assets/icons/reportCustom.png',
    alt: 'Custom Reports',
    title: 'Custom Reports',
  },
  {
    img: '/src/assets/icons/accessAnywhere.png',
    alt: 'Access Anywhere',
    title: 'Access Anywhere',
  },
];

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white">
      {/* Sticky nav on top */}
      <MainNavBar />

      {/* Hero Section with blue/purple gradient and modern style */}
      <section className="relative flex-1 flex flex-col justify-center items-center text-center px-4 py-8 md:py-16 overflow-hidden">
        {/* Decorative blurred background shapes with blue/purple */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C0C9EE] opacity-30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8CCDEB] opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#C0C9EE] opacity-10 rotate-12 rounded-full blur-2xl pointer-events-none" />

        {/* headline + subtext */}
        <div className="max-w-3xl z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight text-[#1F2343] drop-shadow-sm">
            <span className="text-[#1F2343]">Effortless</span> <span className="text-[#1F2343]">Annual Reporting</span>
          </h1>
          <p className="text-base md:text-lg mb-8 text-[#1F2343] font-medium drop-shadow-sm">
            ARG lets you collect, visualize, and publish data-driven reports in minutes—no spreadsheets, no stress.
          </p>
        </div>

        {/* feature icons with blue/purple backgrounds and hover effect */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 z-10">
          {FEATURES.map(({ img, alt, title }, i) => (
            <div
              key={title}
              className={
                `flex flex-col items-center rounded-xl shadow-lg p-4 transition-transform hover:-translate-y-1 hover:shadow-2xl ` +
                [
                  'bg-[#C0C9EE]/90', // blue-purple
                  'bg-[#8CCDEB]/90', // blue
                  'bg-gradient-to-br from-[#8CCDEB]/90 to-[#C0C9EE]/90', // blend
                  'bg-[#C0C9EE]/80', // lighter blue
                ][i % 4]
              }
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-2 bg-white/80 shadow">
                <img src={img} alt={alt} className="w-10 h-10 drop-shadow" />
              </div>
              <span className="text-sm font-semibold mt-1 text-[#1F2343]">{title}</span>
            </div>
          ))}
        </div>

        {/* primary CTA with blue/purple accent and icon */}
        <a href="/sign-up" className="bg-gradient-to-r from-[#8CCDEB] via-[#C0C9EE] to-[#1F2343] hover:from-[#C0C9EE] hover:to-[#8CCDEB] text-white transition-colors duration-200 w-44 text-lg font-semibold shadow-lg z-10 flex items-center justify-center gap-2 group rounded-full py-3 px-6 mt-2">
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          Get Started
        </a>

        {/* subtle testimonial footer inside hero with color accent */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs italic max-w-xs text-[#1F2343] z-20 bg-white/80 px-4 py-2 rounded-full shadow">
          “ARG made our reporting seamless and stress‑free.” — Dr. Jane Doe
        </div>
      </section>

      {/* global footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
