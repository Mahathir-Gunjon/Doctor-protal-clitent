import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentServices from './AppointmentServices';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {

    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, "PP")
    const {data: services, isLoading , refetch} = useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])

    return (
        <div>
            <h1 className="text-3xl text-secondary font-bold text-center py-6">Appointmentb Available On: {format(date, 'PP')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
                {
                    services?.map(service => <AppointmentServices 
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment && <BookingModal 
                date={date} 
                treatment={treatment} 
                setTreatment={setTreatment}
                refetch={refetch}
                />
            }
        </div>
    );
};

export default AvailableAppointments;