import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <nav>
                <header className="footer-title">Services</header>
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
            <form>
                <header className="footer-title">Newsletter</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="Your email" className="input input-bordered w-full pr-16" />
                        <button className="btn text-neutral font-semibold bg-gray-300 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;