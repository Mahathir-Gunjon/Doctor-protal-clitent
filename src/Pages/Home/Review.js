import React from 'react';

const Review = ({ review }) => {
    const { name, reviewText, img } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl p-6 py-10">
            <div className="card-body">
                <p className='py-2'>{reviewText}</p>
                <div className="flex gap-5 items-center py-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>Califonia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;