import React from 'react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
  </svg>
);

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25M2.25 6.75c0-8.284 6.716-15 15-15h2.25m0 0v11.25c0 8.284-6.716 15-15 15m0-15v11.25" />
  </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ContactFooter: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Contact Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 mb-12 md:mb-16 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="text-gray-900">
                {/* Header */}
                <div className="text-[#056608] text-sm font-medium mb-4 tracking-wide uppercase">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
                  Let's Bring Your Vision To Life
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We'd love to hear about your space, your goals, and how we can help transform your interiors into something truly special.
                </p>

                {/* Contact Info */}
                <div className="mb-6 pb-6 border-b border-gray-300">
                  <div className="text-gray-500 text-sm font-medium mb-2">Office</div>
                  <div className="text-gray-900 text-base">
                    123 Harmony Lane, Suite 204<br />
                    Toronto, ON, Canada M4B 1C5
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-300">
                  <div className="text-gray-500 text-sm font-medium mb-2">Email</div>
                  <a href="mailto:info@layoutly.com" className="text-gray-900 text-base hover:text-[#056608] transition-colors duration-200">
                    info@layoutly.com
                  </a>
                </div>

                <div className="mb-8">
                  <div className="text-gray-500 text-sm font-medium mb-2">Telephone</div>
                  <a href="tel:+14165550188" className="text-gray-900 text-base hover:text-[#056608] transition-colors duration-200">
                    +1 (416) 555-0188
                  </a>
                </div>

                {/* Social Media */}
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm font-medium mr-4">Follow:</span>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#056608] transition-all duration-200 cursor-pointer">
                      <FacebookIcon className="w-4 h-4 text-gray-600 hover:text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#056608] transition-all duration-200 cursor-pointer">
                      <InstagramIcon className="w-4 h-4 text-gray-600 hover:text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#056608] transition-all duration-200 cursor-pointer">
                      <TelegramIcon className="w-4 h-4 text-gray-600 hover:text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                <form className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#056608] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#056608] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your number"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#056608] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#056608] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer">
                        <option value="">Select your project</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="office">Office</option>
                        <option value="retail">Retail</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#056608] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Project Budget
                      </label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#056608] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer">
                        <option value="">Enter your budget</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your space, goals, or anything you'd like us to know"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#056608] focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-[#056608] hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  NYSC Connect
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We're a boutique job matching platform dedicated to connecting NYSC corps members with their dream career opportunities.
                </p>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#056608] transition-all duration-200 cursor-pointer">
                    <FacebookIcon className="w-4 h-4 text-gray-600 hover:text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#056608] transition-all duration-200 cursor-pointer">
                    <InstagramIcon className="w-4 h-4 text-gray-600 hover:text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#056608] transition-all duration-200 cursor-pointer">
                    <TelegramIcon className="w-4 h-4 text-gray-600 hover:text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#056608] transition-all duration-200 cursor-pointer">
                    <YoutubeIcon className="w-4 h-4 text-gray-600 hover:text-white" />
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h3 className="text-gray-900 font-semibold text-lg mb-6">Quick Link</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-600 hover:text-[#056608] text-sm transition-colors duration-200">
                    Hero
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#056608] text-sm transition-colors duration-200">
                    About
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#056608] text-sm transition-colors duration-200">
                    Service
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#056608] text-sm transition-colors duration-200">
                    Work
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#056608] text-sm transition-colors duration-200">
                    Team
                  </a>
                </div>
              </div>

              {/* Company */}
              <div className="lg:col-span-1">
                <h3 className="text-gray-900 font-semibold text-lg mb-6">Company</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-600 hover:text-[#056608] text-sm transition-colors duration-200">
                    Privacy
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#056608] text-sm transition-colors duration-200">
                    Conditions
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#056608] text-sm transition-colors duration-200">
                    FAQs
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="lg:col-span-1">
                <h3 className="text-gray-900 font-semibold text-lg mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <PhoneIcon className="w-4 h-4 text-[#056608] mr-3 mt-0.5 flex-shrink-0" />
                    <a href="tel:+14165550188" className="text-gray-600 text-sm hover:text-[#056608] transition-colors duration-200">
                      +234 (81) 555-0188
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MailIcon className="w-4 h-4 text-[#056608] mr-3 mt-0.5 flex-shrink-0" />
                    <a href="mailto:info@company.com" className="text-gray-600 text-sm hover:text-[#056608] transition-colors duration-200">
                      info@nyscconnect.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="w-4 h-4 text-[#056608] mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-600 text-sm leading-relaxed">
                      123 Harmony Lane, Suite 204<br />
                      Garki, Abuja, Nigeria 
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-300 pt-8 mt-8">
              <p className="text-center text-gray-500 text-sm">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
