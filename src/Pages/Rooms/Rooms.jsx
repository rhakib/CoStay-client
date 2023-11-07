import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Container from '../../Container/Container';
import RoomsCard from './RoomsCard';

const Rooms = () => {

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
        queryKey: ['rooms',],
        queryFn: getRooms
    })
    console.log(rooms?.data);


    return (
        <Container>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    rooms?.data.map(room => <RoomsCard key={room._id} room={room}></RoomsCard>)

                }
            </div>
        </Container>
    );
};

export default Rooms;