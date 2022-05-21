import React from 'react';

const ServiceCard = ({service}) => {
    const {serviceIcon, serviceTitle, serviceDescription} = service
    return (
        <div className="card w-96 bg-base-100 mx-auto">
            <figure className="px-10 pt-10">
                <img src={serviceIcon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceTitle}</h2>
                <p>{serviceDescription}</p>
            </div>
        </div>
    );
};

export default ServiceCard;