import React, { useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Container from '../../Container/Container';
import RoomsCard from './RoomsCard';
import { useLoaderData, useParams } from 'react-router-dom';

const Rooms = () => {
   

    const axios = useAxios()
    const [price, setPrice] = useState('')

    const getRooms = async () => {
        const res = await axios.get(`/rooms?sortField=price&sortOrder=${price}`)
        return res;

    }

    const {
        data: rooms,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['rooms', price],
        queryFn: getRooms
    })
    console.log(rooms?.data);

    if (isLoading) {
        return <div className='flex justify-center min-h-screen'><span className="loading loading-spinner loading-lg"></span></div>
      
        
    }

    const sortbyPrice = e =>{
        e.preventDefault()
        setPrice(e.target.value)

    }

    return (
        <Container>
            <select onChange={(e) => sortbyPrice(e)} className="select select-bordered w-full max-w-xs my-6">
                                <option disabled selected>Filter by Price</option>
                                <option value='asc'>Low to High</option>
                                <option value='desc'>High to Low</option>
                            </select>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    rooms?.data.map(room => <RoomsCard rooms={rooms} key={room._id} room={room}></RoomsCard>)

                }
            </div>
        </Container>
    );
};

export default Rooms;