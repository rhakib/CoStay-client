import { useQuery } from '@tanstack/react-query';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import Aos from 'aos';
import 'aos/dist/aos.css'

const RoomsCard = ({ room }) => {
    const { roomId, _id, room_name,  price, available_seats, img1, } = room;
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
        Aos.init()




    },
        [reviews?.data, roomId])
    useEffect(() => {

        review?.map(rating => setReviewData(rating))


    },
        [review])

    console.log(stars);

    return (
        <div >
            <div data-aos="zoom-in-right"  data-aos-duration="2000"  className='relative'>
                <Link to={`/rooms/${_id}`}><img  alt="" src={img1} className='rounded-t-md w-[402px] h-[250px] lg:h-[300px] ' /></Link>
                <div className='flex p-4 justify-between h-20 rounded-b-lg bg-gray-200'>
                    <h3 className='text-xl text-center font-semibold'>{room_name}</h3>
                    <div className='space-y-1'>
                        <p className='font-semibold'>${price}/Night</p>
                        {
                            stars > 0 && <div className='flex items-center'>
                            <p className='font-semibold flex items-center gap-1'>Rating: <span className='text-orange-500 text-xl'>&#9733;</span></p>
                                <p>{review?.length > 0 && <p>({review?.length})</p>}</p>
                            </div>
                        }
                    </div>
                </div>
                <div className='flex items-center md:gap-1 gap-4 lg:gap-6 absolute top-32 left-24 md:left-10 lg:left-20'>
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