import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero/hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../components/about/about';
import Contact from '../components/contact/contact';

// if in dev mode
if (process.env.NODE_ENV === 'development') {
  // Setup react-axe to catch accessibility errors during development
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

AOS.init();

const IndexPage = () => {
  console.log('index page');
  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
