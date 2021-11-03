import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Blog></Blog>
            <About></About>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;