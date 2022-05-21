import React from 'react';
import doctor from '../../assets/images/doctor.png';
import Button from '../Button/Button';

const MakeAppointment = () => {
    return (
        <section className='makeAppointment-bg flex px-0 justify-center items-center my-40'>
                <div className='flex-1 hidden lg:block'>
                    <img src={doctor} className="w-full shrink-0 mt-[-200px]" alt='' />
                </div>
                <div className='flex-1 text-white px-2 md:px-12 lg:px-28'>
                    <h1 className="text-2xl font-bold text-primary">Appointment</h1>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Make Appointment</Button>
                </div>
        </section>
    );
};

export default MakeAppointment;