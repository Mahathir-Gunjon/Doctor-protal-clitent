import React from 'react';
import quote from  '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id:1,
            name: 'Winson D. Alvarado',
            reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            img: people1
        },
        {
            _id:2,
            name: 'Winson D. Alvarado',
            reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            img: people2
        },
        {
            _id:3,
            name: 'Winson D. Alvarado',
            reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            img: people3
        }
    ]

    return (
        <section className='my-28'>
            <div className='flex flex-wrap justify-between px-2 md:px-12 lg:px-28'>
                <div className='text-start'>
                    <h1 className="text-2xl text-primary font-bold">Testimonial</h1>
                    <h1 className="text-5xl">What Our Patients Says</h1>
                </div>
                <div className='text-end'>
                    <img src={quote} className='w-28 lg:w-48' alt="" />
                </div>
            </div>
            <div className="px-2 md:px-12 lg:px-36 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        reviews.map(review => <Review review={review} key={review._id}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;