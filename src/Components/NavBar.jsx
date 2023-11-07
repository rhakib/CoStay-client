import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="">
            <NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>
            <NavLink to='/rooms' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Rooms</NavLink>
            <NavLink to='/bookings' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>My Bookings</NavLink>
            {user?.email ? <button className='btn btn-ghost btn-sm' onClick={() => logOut()}>LOGOUT</button> : <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>}
        </div>
    );
};

export default NavBar;