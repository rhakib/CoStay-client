import React from 'react';
import Banner from '../Components/Banner';
import FeaturedRooms from '../Components/FeaturedRooms';
import Testomonials from '../Components/Testomonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;