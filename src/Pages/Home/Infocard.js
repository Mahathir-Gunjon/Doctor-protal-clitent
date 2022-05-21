import React from 'react';


const Infocard = ({img , title, desription, bg}) => {
    return (
            <div className={`card lg:card-side shadow-xl text-white p-10 ${bg}`}>
                <figure><img src={img} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{desription}</p>
                </div>
            </div>
    );
};

export default Infocard;