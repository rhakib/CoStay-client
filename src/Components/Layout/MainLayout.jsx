import React from 'react';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Footer';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

const MainLayout = ({ children }) => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success('logged out successfully, see you again')
            })
    }

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className='w-full navbar bg-base-300'>
                    <div className="w-full max-w-[1200px] mx-auto">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-2xl font-semibold"><Link to='/'>CoStay</Link></div>
                        <div className="flex-none hidden lg:block">
                            {/* Navbar menu content here */}

                            <NavBar></NavBar>
                        </div>
                        <div className="bg-base-200 lg:hidden rounded-xl">
                            {user && <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li><NavLink to='/bookings'>My bookings</NavLink></li>
                                    <li>{user?.email && <button className='' onClick={handleLogOut}>Logout</button>} </li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
                {/* Page content here */}
                {children}
                <div className='my-12'>
                    <Footer></Footer>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* Sidebar content here */}
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default MainLayout;