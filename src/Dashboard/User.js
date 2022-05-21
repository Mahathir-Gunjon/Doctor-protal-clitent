import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Shared/Loading';
import UserRow from './UserRow';

const User = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className="text-4xl">user availabe{users.length}</h1>


            <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=> <UserRow 
                            key={user._id}
                            user={user}
                            refetch={refetch}
                            >

                            </UserRow>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default User;