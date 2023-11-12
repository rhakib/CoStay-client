import logo from '../assets/logoC.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer max-w-7xl mx-auto p-10 text-base-content">
            <nav className='order-4'>
                <img src={logo} className='w-52' alt="" />
                <p className='ml-8 text-lg'>Live Like Home</p>
            </nav>
            <nav>
                <header className="footer-title">Services </header>
                <NavLink to='http://localhost:5173/rooms' className="link link-hover">Rooms</NavLink>
                <NavLink to='http://localhost:5173/bookings' className="link link-hover">Bookings</NavLink>
                <a href='#featured' className="link link-hover">Featured rooms</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <NavLink to='http://localhost:5173/about' className="link link-hover">About us</NavLink>
                <a href='#testomonials' className="link link-hover">Testomonials</a>
                <NavLink to='http://localhost:5173/faq' className="link link-hover">FAQ</NavLink>

                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <NavLink to='http://localhost:5173/privacy' className="link link-hover">Privacy policy</NavLink>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            
        </footer>
    );
};

export default Footer;