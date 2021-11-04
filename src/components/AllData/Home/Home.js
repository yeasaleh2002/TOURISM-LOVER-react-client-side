import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Gallery></Gallery>
            <Blog></Blog>
            <About></About>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;