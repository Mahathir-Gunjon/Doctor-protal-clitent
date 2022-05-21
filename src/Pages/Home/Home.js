import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import Info from './Info';
import Servise from './Servise';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info></Info>
            <Servise/>
            <MakeAppointment/>
            <Testimonial/>
            <Contact/>
            <Footer />
        </div>

    );
};

export default Home;