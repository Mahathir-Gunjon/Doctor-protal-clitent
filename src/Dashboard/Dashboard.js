import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../hooks/useAdmin';
import auth from '../firebase.init';

const Dashboard = () => {

    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            <h2 className="text-5xl text-secondary">Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard'>My Appointments</NavLink></li>
                    <li><NavLink to='review'>My Reviews</NavLink></li>
                    <li><NavLink to='history'>My History</NavLink></li>
                    {
                        admin && <li><NavLink to='users'>All Users </NavLink></li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;