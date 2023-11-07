import React from 'react';
import useAxios from '../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

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
    console.log(rooms.data); 


    return (
        <div>
            
        </div>
    );
};

export default Rooms;