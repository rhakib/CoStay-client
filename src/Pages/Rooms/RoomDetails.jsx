import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';

const RoomDetails = () => {

    const { id } = useParams()
    const rooms = useLoaderData()
    const [room, setRoom] = useState(rooms)
    const { _id, room_name, description, price, amenities, room_size, available_seats, image } = room;
    const [seat, setSeat] = useState()
    console.log(seat);

    const axios = useAxios()

    useEffect(() => {
        const filteredData = rooms?.find((item) => item._id == id);
        setRoom(filteredData)
        setSeat(available_seats)

    }, [rooms, id, available_seats])



    const handleBooking = (e) => {

        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const email = form.get('email');
        const date = form.get('date');


        if (seat > 0) {
            setSeat(seat - 1)
        }

        const bookings = {
            name,
            email,
            date,
            available_seats: seat,
            image,
            room_name,
            price


        }
        console.log(bookings);

        axios.post('/bookings', bookings)
            .then(res => {
                console.log(res.data);
            })

        axios.put(`/rooms/${_id}`, bookings)
            .then(res => {
                console.log(res.data);
            })




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
                <div className="mt-6 flex items-center gap-4">
                    <p className='text-xl btn font-normal capitalize'>Available Seats: {seat}</p>
                    <span className="text-2xl font-bold ">${price}/Per Night</span>
                </div>
                {
                    seat == 0 ? <h2 className='text-2xl py-20 font-semibold text-center'>This room is currently unavailable, you can visit <Link to='/rooms'><span className='text-purple-700'>Explore rooms</span></Link> to book other rooms</h2> : <div className="hero pb-12" >
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-[350px] md:w-[400px]  shadow-2xl mt-6 glass  bg-purple-400">
                            <form onSubmit={handleBooking} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  font-semibold text-xl">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input  input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text   font-semibold text-xl">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input  input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Date</span>
                                    </label>
                                    <input type="date" name='date' placeholder="Email" className="input  input-bordered" required/>
                                </div>
                                <div className="form-control mt-6">
                                    
                                         <button type='submit' className="btn  text-white text-lg hover:bg-purple-700 bg-purple-600">Book Now</button>
                                    
                                </div>


                            </form>

                        </div>
                    </div>
                </div>
                }

            </div>
        </div>
    );
};

export default RoomDetails;