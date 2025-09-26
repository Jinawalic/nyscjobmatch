import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import ContactFooter from '../components/ContactFooter';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedJobs />
      <Testimonials />
      <CallToAction />
      <ContactFooter />
    </>
  );
};

export default LandingPage;
