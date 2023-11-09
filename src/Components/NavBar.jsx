import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const NavBar = () => {
    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success('logged out successfully, see you again')
            })
    }


    const { user, logOut } = useAuth()
    const navLinks = <>
    <NavLink  to='/' >Home</NavLink>
    <NavLink to='/addproduct'>Add Product</NavLink>
    <NavLink className='flex items-center gap-1' to='/mycart'>My Cart<AiOutlineShoppingCart className='text-xl'></AiOutlineShoppingCart></NavLink>
    {user ? <NavLink className='hidden' to='/signup'>Register</NavLink> : <NavLink to='/signup'>Register</NavLink>}        {user ? <li className="bg-base-200 rounded-xl">
        <li className="flex gap-2 items-center p-3">
            {user?.photoURL ? <li className="w-[100px] lg:w-[40px]"><img className="w-full rounded-full" src={user.photoURL} alt="" /></li> : <FaUserCircle className="text-3xl"></FaUserCircle>}
            <li className="bg-slate-200 rounded-md px-2">{user.displayName}</li>
            <li className=""><button className="bg-slate-500 flex items-center gap-1 text-white p-2 rounded-lg" onClick={handleLogOut}><span><FaSignOutAlt></FaSignOutAlt></span>Logout</button></li>
        </li>
    </li> : <li className="mr-4"><NavLink to='/login'>Login</NavLink></li>} </>


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