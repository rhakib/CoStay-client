import  { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const RoomDetails = () => {

    const { id } = useParams()
    const rooms = useLoaderData()
    const [room, setRoom] = useState(rooms)
    // const [booked, setBooked] = useState({})
    const [seat, setSeat] = useState()
    const [bookingDate, setBookingDate] = useState('')
    const [filteredDate, setFilteredDate] = useState([])
    const [bookedDate, setBookedDate] = useState({})
    const [review, setReview] = useState([])
    const { _id, roomId, room_name, description, price, amenities, offers, room_size, available_seats, image } = room;
    const newBookedDate = bookedDate.bookingDate
 
    const discountedPrice = (offers / 100) * price
  


    const axios = useAxios()

    useEffect(() => {
        const filteredData = rooms?.find((item) => item._id == id);
        setRoom(filteredData)
        setSeat(available_seats)

    }, [rooms, id, available_seats,])


    const getBookings = async () => {
        const res = await axios.get(`/bookings`)
        return res;

    }

    const {
        data: bookings,
        isLoading,
        isError,
        error,
        // refetch
    } = useQuery({
        queryKey: ['bookings',],
        queryFn: getBookings
    })
    // console.log(bookings?.data);


    useEffect(() => {

        filteredDate?.map(booking => setBookedDate(booking))
        


    }, [filteredDate])

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
    console.log(reviews?.data);

    useEffect(()=>{
        const filteredReview = reviews?.data.filter(rev => rev.roomId == roomId)
        setReview(filteredReview);

        const filterDate = bookings?.data.filter(room => room.roomId == roomId )
        setFilteredDate(filterDate)
    }, 
    [reviews?.data, roomId, bookings?.data, _id ])
    
    console.log(newBookedDate);


    const handleInputChange = (e) => {
        setBookingDate(e.target.value)

    }



    if (newBookedDate == bookingDate) {
        Swal.fire(
            'Not available!',
            'already booked in this date, please choose another one',
            'error'
        )
    }



    const handleBooking = () => {


        if (seat > 0) {
            setSeat(seat - 1)
        }

        const bookings = {
            // name,
            // email,
            bookingDate,
            available_seats: seat,
            image,
            room_name,
            price,
            roomId


        }
        // console.log(bookings);

        axios.post('/bookings', bookings)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Booked!!!',
                        'Welcome to CoStay, You have booked this room.',
                        'success'
                    )

                }

            })

        axios.put(`/rooms/${_id}`, bookings)
            .then(res => {
                console.log(res.data);
            })

    }
    if (isLoading) {
        return <div className='flex justify-center min-h-screen'><span className="loading loading-spinner loading-lg"></span></div>

    }
    if (isError) {
        return <p>Something went wrong {error}</p>
    }

    return (
        <div className=" mt-8 border max-w-7xl mx-auto border-gray-200 rounded-lg  grid md:grid-cols-2 gap-16">

            <div>
                <img className="p-4 py-6 md:w-full rounded-[40px]" src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="product image" />
                <div className='grid grid-cols-3'>
                    <img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='p-4 transition hover:scale-150' />
                    <img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='p-4 transition hover:scale-150' />
                    <img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='p-4 transition hover:scale-150' />
                </div>
            </div>

            <div className="flex flex-col p-4 md:p-1 justify-center space-y-3">

                <h5 className="text-5xl font-semibold tracking-tight  ">{room_name}</h5>
                <h5 className="tracking-tight text-gray-900 dark:text-white"></h5>
                <p className='md:w-[550px]'>{description}</p>
                <div>
                    {
                        amenities?.map((item, idx) => <li key={idx}>{item}</li>)
                    }
                </div>
                <p className='font-bold'>Room Size: {room_size}</p>

                <div className="mt-6 flex items-center gap-4">
                    <p className={`${seat == 0 ? 'text-xl btn text-white font-semibold capitalize bg-red-500 hover:bg-red-600' : 'text-xl btn font-normal capitalize'}`}>Available Seats: {seat}</p>
                    <span className="text-2xl font-bold ">${offers ? (price - discountedPrice) : price}/Per Night</span>
                    {offers && seat > 0 && <span className="text-2xl text-purple-500 font-bold ">({offers}% off)</span>}

                </div>

                <div className="hero pb-12" >
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-[350px] md:w-[400px]  shadow-2xl mt-6 glass  bg-purple-400">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Choose the date</span>
                                    </label>
                                    <input onChange={handleInputChange} type="date" name='date' placeholder="Email" className="input  input-bordered" required />
                                </div>
                                <div className="form-control mt-6">

                                    {
                                        seat == 0 || bookingDate == newBookedDate ? <p className="btn   text-lg  bg-base-600 ">Unavailable</p> :
                                            <><button className="btn border-none text-white hover:bg-purple-700 bg-purple-600" onClick={() => document.getElementById('my_modal').showModal()}>Book Now</button>
                                                <dialog id={'my_modal'} className="modal  sm:modal-middle">
                                                    <div className="modal-box p-20 bg-gray-200">
                                                        <h3 className="font-bold text-lg text-center">Summary of your booking</h3>
                                                        <div className='flex flex-col ml-16 my-6'>
                                                            <h2><span className='font-bold'>Room</span>: {room_name}</h2>
                                                            <h2><span className='font-bold'>Date</span>: {bookingDate}</h2>
                                                            <h2> <span className='font-bold'>Price</span>: ${price}</h2>

                                                        </div>


                                                        <div className="modal-action flex flex-col items-center justify-center space-y-4">
                                                            <form method="dialog" className='flex gap-4'>

                                                                <button onClick={handleBooking} type='submit' className="btn  text-white text-lg hover:bg-purple-700 bg-purple-600">Confirm</button>

                                                                <button className="btn bg-red-500 hover:bg-red-800 text-white">Cancel</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog></>}

                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;