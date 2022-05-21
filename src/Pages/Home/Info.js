import React from 'react';
import Infocard from './Infocard';
import clock from '../../assets/icons/clock.svg'
import map from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[-100px] px-2 md:px-12 lg:px-28'>
            <Infocard bg='font-bold bg-gradient-to-r from-secondary to-primary' title="Opening Hours" desription="Lorem Ipsum is simply dummy text of the pri" img={clock}/>
            <Infocard bg='bg-accent' title="Contact Us Now" desription="+000 123 456789" img={phone}/>
            <Infocard bg='font-bold bg-gradient-to-r from-secondary to-primary' title="Visit Our Location" desription="Brooklyn, NY 10036, United States" img={map}/>
        </div>
    );
};

export default Info;