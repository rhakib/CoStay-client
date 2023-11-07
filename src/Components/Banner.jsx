import React from 'react';

const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/FJ6gnfS/495698793.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to CoStay</h1>
                    <p className="mb-5">Stay Cozy, Be Happy</p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;