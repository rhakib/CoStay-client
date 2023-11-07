import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Container from '../../Container/Container';
import RoomsCard from './RoomsCard';
import { useLoaderData, useParams } from 'react-router-dom';

const Rooms = () => {

    const room = useLoaderData()
    console.log(room);

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
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    rooms?.data.map(room => <RoomsCard rooms={rooms} key={room._id} room={room}></RoomsCard>)

                }
            </div>
        </Container>
    );
};

export default Rooms;