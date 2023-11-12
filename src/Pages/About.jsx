import React from 'react';
import Team from '../Components/Team';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <>
        <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className='max-w-7xl mx-auto'>
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 p-10">
                    <div className="flex-1">
                        <h2 className="text-5xl font-semibold">About Hotel CoStay</h2>
                        <p className="text-sm text-gray-400 mt-2">CoStay - Best Hotel in Bangladesh.</p>
                        <p className="mt-10">Hotel CoStay welcomes you to enjoy comfort and luxury, a place where you will find exceptional three star facilities and world class hospitality.</p>
                        <p className="mt-5">Founded in 2000 in Bangladesh, CoStay has grown from a small Dutch start-up to one of the world’s leading digital travel companies. Part of CoStay Holdings Inc. CoStay mission is to make it easier for everyone to experience the world. </p>
                        <p className="mt-5">By investing in technology that takes the friction out of travel, CoStay seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, CoStay enables properties around the world to reach a global audience and grow their businesses.</p>
                        <p className="mt-5">CoStay is available in 20 Districts. Wherever you want to go and whatever you want to do, CoStay makes it easy and supports you with 24/7 customer support.</p>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.ibb.co/Jm0M20g/5.jpg" alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>
            <Team></Team>
        </>

    );
};

export default About;