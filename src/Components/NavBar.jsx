import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import toast from 'react-hot-toast';

const NavBar = () => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success('logged out successfully, see you again')
            })
    }




    return (
        <div className="flex items-center gap-2">
            <div>
                <NavLink to='/' className={({ isActive }) => isActive ? 'btn bg-slate-400 hover:bg-slate-500  btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink>
                <NavLink to='/rooms' className={({ isActive }) => isActive ? 'btn bg-slate-400 hover:bg-slate-500  btn-sm' : 'btn btn-ghost btn-sm'}>Rooms</NavLink>
                <NavLink to='/bookings' className={({ isActive }) => isActive ? 'btn bg-slate-400 hover:bg-slate-500  btn-sm' : 'btn btn-ghost btn-sm'}>My Bookings</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'btn bg-slate-400 hover:bg-slate-500  btn-sm' : 'btn btn-ghost btn-sm'}>About Us</NavLink>
                <NavLink to='/faq' className={({ isActive }) => isActive ? 'btn bg-slate-400 hover:bg-slate-500  btn-sm' : 'btn btn-ghost btn-sm'}>FAQ</NavLink>
            </div>
            {
                user?.email ?
                    <div>
                        <div>
                            <div className="bg-base-200 rounded-xl">
                                <div className="flex gap-2 items-center p-3">
                                    {user?.photoURL ? <div className="w-[100px] lg:w-[40px]"><img className="w-full rounded-full" src={user.photoURL} alt="" /> </div> : <FaUserCircle className="text-3xl"></FaUserCircle> }
                                    <p className="bg-slate-200 rounded-md px-2">{user.displayName}</p>
                                    <button className="bg-slate-500 flex items-center gap-1 text-white p-2 rounded-lg" onClick={handleLogOut}><span><FaSignOutAlt></FaSignOutAlt></span>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div> : <NavLink to='/login' className={({ isActive }) => isActive ? 'btn bg-slate-400 hover:bg-slate-500  btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink>}


        </div>
    );
};

export default NavBar;