import React from 'react';

const Newslater = () => {
    return (
        <div className='mb-4'>
            <h2 className='text-5xl font-semibold text-center mt-16'>Subscribe to get exiting offers</h2>
            <hr className='w-56 mx-auto bg-gray-400 my-10 p-[2px]'/>
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-[44px] font-bold">Subscribe Now</h1>
                        <div className="form-control">                           
                            <label className="input-group">
                                <input type="text" placeholder="Your email" className="input text-neutral input-bordered" />
                                <span className='btn text-neutral font-semibold bg-gray-300'>Subscribe</span>
                            </label>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslater;