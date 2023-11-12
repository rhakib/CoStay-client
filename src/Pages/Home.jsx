import React from 'react';
import Banner from '../Components/Banner';
import FeaturedRooms from '../Components/FeaturedRooms';
import Testomonials from '../Components/Testomonials';
import Newslater from '../Components/Newslater';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Testomonials></Testomonials>
            <Newslater></Newslater>
        </div>
    );
};

export default Home;