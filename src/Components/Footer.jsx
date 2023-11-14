import logo from '../assets/logoC.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer max-w-7xl mx-auto p-10 text-base-content">
            <nav className='order-4'>
                <img src={logo} className='w-52' alt="" />
                <p className='ml-8 -mt-9'>Stay Like Home</p>
            </nav>
            <nav>
                <header className="footer-title">Services </header>
                <NavLink to='https://costay-d3e93.web.app/rooms' className="link link-hover">Rooms</NavLink>
                <NavLink to='https://costay-d3e93.web.app/bookings' className="link link-hover">Bookings</NavLink>
                <a href='#featured' className="link link-hover">Featured rooms</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <NavLink to='https://costay-d3e93.web.app/about' className="link link-hover">About us</NavLink>
                <a href='https://costay-d3e93.web.app/#testomonials' className="link link-hover">Testomonials</a>
                <NavLink to='https://costay-d3e93.web.app/faq' className="link link-hover">FAQ</NavLink>

                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <NavLink to='https://costay-d3e93.web.app/privacy' className="link link-hover">Privacy policy</NavLink>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            
        </footer>
    );
};

export default Footer;