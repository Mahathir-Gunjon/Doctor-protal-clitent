import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import exceptional from '../../assets/images/treatment.png';
import Button from '../Button/Button';

const Servise = () => {
    const services = [
        {
            _id: 1,
            serviceIcon: fluoride,
            serviceTitle: 'Fluoride Treatment',
            serviceDescription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            serviceIcon: cavity,
            serviceTitle: 'Cavity Filling',
            serviceDescription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            serviceIcon: whitening,
            serviceTitle: 'Teeth Whitening',
            serviceDescription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='my-28 px-2 md:px-12 lg:px-28'>
            <h1 className='text-2xl text-center text-primary font-bold'>OUR SERVICES</h1>
            <h1 className='text-accent text-3xl text-center font-bold'>Services We Provide</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-28">
                {
                    services.map(service => <ServiceCard service={service} key={service._id} />)
                }
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={exceptional} className="max-w-lg w-96 rounded-lg shadow-2xl" alt=''/>
                    <div className='w-3/6'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get start</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servise;