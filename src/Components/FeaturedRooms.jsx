import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';


import useAxios from '../Hooks/useAxios';

import RoomsCard from '../Pages/Rooms/RoomsCard';
import Container from '../Container/Container';


const FeaturedRooms = () => {


    const axios = useAxios()

    const getRooms = async () => {
        const res = await axios.get(`/rooms`)
        return res;

    }

    const {
        data: rooms,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['rooms'],
        queryFn: getRooms
    })
    console.log(rooms?.data);

    if (isLoading) {
        return <div className='flex justify-center min-h-screen'><span className="loading loading-spinner loading-lg"></span></div>


    }

  

    return (
       
            <Container>    
                <h2 className='text-center text-5xl font-semibold mt-16'>Our Featured Rooms</h2>
                <hr className='w-1/2 mx-auto bg-gray-400 mt-5 mb-10 p-[2px]'/>    
                <div className='grid md:grid-cols-3 gap-5 p-4'>
                    {
                        rooms?.data.map(room => <RoomsCard rooms={rooms} key={room._id} room={room}></RoomsCard>)

                    }
                </div>
            </Container>
     
    );
};

export default FeaturedRooms;