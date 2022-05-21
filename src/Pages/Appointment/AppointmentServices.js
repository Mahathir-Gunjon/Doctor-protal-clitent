import React from 'react';

const AppointmentServices = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card mx-auto">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-600'>Slot Not Available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label 
                    disabled={slots.length === 0} 
                    onClick={()=>setTreatment(service)}
                    htmlFor="booking-modal" 
                    className="btn btn-md btn-secondary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentServices;