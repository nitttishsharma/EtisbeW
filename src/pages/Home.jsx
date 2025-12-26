import React from 'react';
import Hero from '../components/Homepage/Hero';
import Story from '../components/Homepage/Story';
import Services from '../components/Homepage/Services';
import Portfolio from '../components/Homepage/Portfolio';
import Technology from '../components/Homepage/Technology';
import Testimonials from '../components/Homepage/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Story />
            <Services />
            <Portfolio />
            <Technology />
            <Testimonials />
        </>
    );
};

export default Home;
