import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Sidebar = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="flex flex-col gap-2 p-4 w-80 min-h-full bg-base-200">
            <NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>
            <NavLink to='/rooms' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Rooms</NavLink>
            <NavLink to='/bookings' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>My Bookings</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>About Us</NavLink>
            <NavLink to='/faq' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>FAQ</NavLink>
            {!user && <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>}
        </div>
    );
};

export default Sidebar;