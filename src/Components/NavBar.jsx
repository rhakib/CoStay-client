import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="">
            <NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Contact</NavLink>
            <NavLink to='/services' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Service</NavLink>
            {user?.email ? <button className='btn btn-ghost btn-sm' onClick={() => logOut()}>LOGOUT</button> : <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>}
        </div>
    );
};

export default NavBar;