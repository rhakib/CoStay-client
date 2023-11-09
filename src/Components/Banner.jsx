import React from 'react';

const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cf2.bstatic.com/xdata/images/hotel/max1024x768/487273308.jpg?k=74888cd4b506917e45ad6f4ca5059305737596e277b1d37d73a8529c121df2ba&o=&hp=1)' }}>
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