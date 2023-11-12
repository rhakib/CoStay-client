import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Review from '../Bookings/Review';
import useAuth from '../../Hooks/useAuth';
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { Helmet } from 'react-helmet';


const RoomDetails = () => {


    const { id } = useParams()
    const [rooms, setRooms] = useState(null)
    const { user } = useAuth()
    const email = user?.email

    const [bookingDate, setBookingDate] = useState('')
    const [filteredDate, setFilteredDate] = useState([])
    const [bookedDate, setBookedDate] = useState({})
    const [review, setReview] = useState([])
    const [seat, setSeat] = useState()

    const axios = useAxios()

    const { _id, roomId, room_name, description, price, amenities, offers, room_size, available_seats, img1, img2, img3, img4 } = rooms || '';
    const newBookedDate = bookedDate.bookingDate


    const discountedPrice = (offers / 100) * price


    useEffect(() => {

        fetch(`http://localhost:5000/rooms/${id}`)
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })

    }, [id,])

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
        queryKey: ['bookings'],
        queryFn: getBookings
    })
    // console.log(bookings?.data);


    useEffect(() => {

        filteredDate?.map(booking => setBookedDate(booking))
        setSeat(available_seats)

    }, [filteredDate, available_seats])

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

    useEffect(() => {

        const filteredReview = reviews?.data.filter(rev => rev.roomId == roomId)
        setReview(filteredReview);

        const filterDate = bookings?.data.filter(room => room.roomId == roomId)
        setFilteredDate(filterDate)
    },
        [reviews?.data, roomId, _id, bookings?.data])



    const handleInputChange = (e) => {
        setBookingDate(e.target.value)

    }

    const handleBooking = () => {


        if (seat > 0) {
            setSeat(seat - 1)
        }

        const bookings = {
            bookingDate,
            available_seats: seat,
            img1,
            room_name,
            price,
            roomId,
            email

        }
        console.log(bookings);

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


    // review based onn stars


    if (newBookedDate == bookingDate) {
        Swal.fire(
            'Not available!',
            'already booked in this date, please choose another one',
            'error'
        )
    }


    return (
        <>
            <Helmet>
                <title>{room_name}</title>
            </Helmet>
            <div className=" mt-8 border max-w-7xl mx-auto border-gray-200 rounded-lg  md:grid-cols-1 grid  lg:grid-cols-2 gap-16">

                <div>
                    <img className="p-4 py-6 md:w-full rounded-[40px]" src={img1} alt="product image" />
                    <div className='grid grid-cols-3'>
                        <img src={img2} alt="" className='p-4 transition hover:scale-150' />
                        <img src={img3} alt="" className='p-4 transition hover:scale-150' />
                        <img src={img4} alt="" className='p-4 transition hover:scale-150' />
                    </div>

                    <div className='ml-4'>
                        <h2 className='text-3xl font-semibold my-4'>Amenities</h2>
                        <div className='grid grid-cols-2'>
                            {
                                amenities?.map((item, idx) => <div className='flex items-center gap-2' key={idx}><BsArrowRightCircleFill></BsArrowRightCircleFill><p className='text-xl'>{item}</p></div>)
                            }
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-4 md:p-1  space-y-3">

                    <div className='space-y-6 md:ml-16 lg:ml-0'>
                        <h5 className="text-5xl font-semibold tracking-tight mt-4 ">{room_name}</h5>
                        <h5 className="tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className='md:w-[480px]'>{description}</p>
                        <p className='font-bold'>Room Size: {room_size}</p>
                        <div className="mt-6 flex items-center md:gap-4">
                            <p className={`${seat == 0 ? 'text-xl btn text-white font-semibold capitalize bg-gray-400 hover:bg-red-600' : 'text-xl btn font-normal capitalize'}`}>Available Seats: {seat}</p>
                            <p className="md:text-2xl font-bold ">${offers && seat > 0 ? (price - discountedPrice) : price}/Night</p>
                            {offers && seat > 0 && <span className="md:text-2xl text-purple-500 font-bold "> <span className='line-through text-neutral'>${price}</span> ({offers}% off)</span>}

                        </div>
                    </div>



                    <div className="hero pb-12" >
                        <div className="hero-content flex-col">
                            <div className="card flex-shrink-0 w-[350px] md:w-[400px]  shadow-2xl mt-6  bg-gray-400">
                                <div className="card-body">
                                    <form className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-xl">Choose the date</span>
                                        </label>
                                        <input onChange={handleInputChange} type="date" name='date' placeholder="date" className="input  input-bordered" required />
                                    </form>
                                    <div className="form-control mt-6">

                                        {!user ? <NavLink to='/login' className="btn border-none text-white hover:bg-gray-700 bg-gray-500"><button className="btn border-none text-white hover:bg-gray-700 bg-gray-500">Login to book</button></NavLink>
                                            : <> {
                                                seat == 0 || bookingDate == newBookedDate ? <p className="btn   text-lg  bg-base-600 ">Unavailable</p> :
                                                    <>{!bookingDate ? <button className="btn border-none text-white hover:bg-gray-700 bg-gray-500">Select a date</button> : <button className="btn border-none text-white hover:bg-gray-700 bg-gray-500" onClick={() => document.getElementById('my_modal').showModal()}>Book Now</button>}
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

                                                                        <button onClick={handleBooking} type='submit' className="btn  text-white text-lg hover:bg-purple-700 bg-gray-500">Confirm</button>

                                                                        <button className="btn bg-red-500 hover:bg-red-800 text-white">Cancel</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </dialog></>} </>}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {review?.length > 0 && <> <h2 className=' text-center text-3xl font-semibold mt-12'>Awesome reviews by our clients</h2>
                <hr className='w-1/3 mx-auto mt-4' />
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 p-6 max-w-7xl mx-auto'>
                    {
                        review?.map(rating => <Review key={rating._id} rating={rating}></Review>)
                    }
                </div> </>}

        </>
    );
};

export default RoomDetails;