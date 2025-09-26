import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import heroImg1 from '../assets/img/hero-img1.png';
import heroImg2 from '../assets/img/hero-img2.jpeg';

const ThumbsUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M2.25 12.75a2.25 2.25 0 012.25-2.25h3.545a.75.75 0 00.683-.444l1.89-4.158A2.25 2.25 0 0112.687 4.5h.976c1.706 0 3.117 1.41 3.117 3.117v.777c0 .36-.058.718-.171 1.06l-.768 2.302h2.92a2.25 2.25 0 012.22 2.642l-1.04 5.2A2.25 2.25 0 0118.781 21H9a2.25 2.25 0 01-2.25-2.25V12H4.5a2.25 2.25 0 01-2.25-2.25z" />
  </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
  </svg>
);

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 overflow-hidden">
      <div className="px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6">
                <ThumbsUpIcon className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-700">#1 Platform for NYSC Job Matching</span>
              </div>

             {/* Headline */}
                <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    <Typewriter
                    words={['Matching NYSC Skills with Top Job Opportunities']}
                    loop={0} // 0 = infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    />
                </h1>
                </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Empowering corps members to connect their unique skills with the right career paths. Discover job opportunities that align with your training and aspirations.
              </p>

              {/* Search */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto lg:mx-0">
                {/* Job search */}
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Find jobs here"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white shadow-sm 
                               focus:ring-2 focus:ring-[#056608] focus:border-[#056608] text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Location */}
                <div className="relative flex-1">
                  <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Abuja, Nigeria"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white shadow-sm 
                               focus:ring-2 focus:ring-[#056608] focus:border-[#056608] text-gray-900 placeholder-gray-500"
                  />
                </div>

                <button className="px-8 py-4 bg-[#056608] hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Search
                </button>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-5 relative">
              {/* Decorative profile card */}
              <div className="absolute top-4 left-4 bg-white rounded-2xl shadow-xl p-4 z-20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300 hidden md:block">
                <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">Complete your profile</div>
                    <div className="flex items-center mb-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-green-500 h-2 rounded-full w-1/5" />
                    </div>
                    <div className="text-xs text-gray-500">2 of 10 steps</div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                    Add your NYSC skills and let recruiters find you faster.
                    </p>
                </div>
                </div>

               {/* Background photos */}
               <img
                 className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg hidden sm:block"
                 src={heroImg1}
                 alt="Hero image 1"
               />
               <img
                 className="absolute top-1/2 right-8 w-24 h-32 md:w-32 md:h-40 rounded-2xl object-cover shadow-lg transform -translate-y-1/2 hidden sm:block"
                 src={heroImg2}
                 alt="Hero image 2"
               />
               <img
                 className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg hidden sm:block"
                 src={heroImg1}
                 alt="Hero image 1"
               />
               <img
                 className="absolute bottom-8 left-0 w-24 h-32 md:w-32 md:h-40 rounded-2xl object-cover shadow-lg hidden sm:block"
                 src={heroImg2}
                 alt="Hero image 2"
               />
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-20 h-20 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 10 }).map((_, row) => (
              <g key={row}>
                {Array.from({ length: 10 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={10 + col * 10} cy={10 + row * 10} r="1.5" fill="#056608" />
                ))}
              </g>
            ))}
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#056608" strokeWidth="2" />
            <circle cx="60" cy="60" r="35" fill="none" stroke="#056608" strokeWidth="2" />
            <circle cx="60" cy="60" r="20" fill="none" stroke="#056608" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-300 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
};

export default Hero;
