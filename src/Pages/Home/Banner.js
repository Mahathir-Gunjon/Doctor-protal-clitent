import React from 'react';
import Chair from '../../assets/images/chair.png'
import Button from '../Button/Button';
import './Home.css'

const Banner = () => {
    return (
        <div className="hero banner-bg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} className="max-w-md rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>get start</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;