import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero'
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Blog />
        </div>
    );
};

export default Home;