import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Products from '../components/Products';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Products />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

