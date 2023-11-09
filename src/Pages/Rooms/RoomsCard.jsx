import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';

const RoomsCard = ({ room }) => {
    const { roomId, _id, room_name, description, price, amenities, available_seats, image } = room;
    const [review, setReview] = useState([])
    const [reviewData, setReviewData] = useState({})
    const axios = useAxios()
    const { stars } = reviewData;

    const getReview = async () => {
        const res = await axios.get(`/review`)
        return res;

    }

    const {
        data: reviews,

    } = useQuery({
        queryKey: ['reviews',],
        queryFn: getReview
    })


    useEffect(() => {
        const filteredReview = reviews?.data.filter(rev => rev.roomId == roomId)
        setReview(filteredReview);




    },
        [reviews?.data, roomId])
    useEffect(() => {

        review?.map(rating => setReviewData(rating))


    },
        [review])

    console.log(stars);

    return (
        <div>
            <div className='relative'>
                <Link to={`/rooms/${_id}`}><img src="https://cf2.bstatic.com/xdata/images/hotel/max1024x768/487273308.jpg?k=74888cd4b506917e45ad6f4ca5059305737596e277b1d37d73a8529c121df2ba&o=&hp=1" alt="" className='rounded-md' /></Link>
                <div className='flex p-4 justify-between'>
                    <h3 className='text-xl text-center font-semibold'>{room_name}</h3>
                    <div className='space-y-1'>
                        <p className='font-semibold'>${price}/Night</p>
                        <div className='flex items-center'>
                            {
                                stars?.map((review, index) => (
                                    <div key={index}>
                                        <p className='font-semibold flex items-center gap-1'>Rating: {Array.from({ length: (review) }, (_, i) => <span className='text-orange-500 text-xl' key={i}>&#9733;</span>)}</p>


                                    </div>
                                ))}
                            <p>{review?.length > 0 && <p>({review?.length})</p>}</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-6 absolute top-32 left-20'>
                    <Link to={`/rooms/${_id}`}><button className='btn'>View</button></Link>
                    {
                        available_seats == 0 ? <h2 className='btn bg-black border-none hover:text-black opacity-70 text-white'>Unavailable</h2> : <Link to={`/rooms/${_id}`}><button className='btn bg-black hover:text-black border-none opacity-70 text-white'>Book Now</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;