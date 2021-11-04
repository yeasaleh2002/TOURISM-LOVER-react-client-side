import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Services from '../ServicesCompontent/Services/Services';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Blog></Blog>
            <About></About>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;