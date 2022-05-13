import React from 'react';
import Infocard from './Infocard';
import clock from '../../assets/icons/clock.svg'
import map from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Infocard img={clock}/>
            <Infocard img={map}/>
            <Infocard img={phone}/>
        </div>
    );
};

export default Info;