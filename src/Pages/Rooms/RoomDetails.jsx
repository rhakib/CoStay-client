import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RoomDetails = () => {

    const { id } = useParams()
    const rooms = useLoaderData()
    const [room, setRoom] = useState(rooms)
    console.log(rooms);
    const { _id, room_name, description, price, amenities, available_seats, image } = room;

    useEffect(() => {
        const filteredData = rooms.find((item) => item._id == id);
        setRoom(filteredData)
    }, [id, rooms])

    console.log(room);

    const handleBooking = () =>{

    }

    return (
        <div className=" mt-8 border max-w-7xl mx-auto border-gray-200 rounded-lg  grid md:grid-cols-2 gap-16">

            <div>
                <img className="p-4 py-6 md:w-full rounded-[40px]" src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="product image" />
                <div className='grid grid-cols-3'>
                    <img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='p-4 ' />
                    <img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='p-4 ' />
                    <img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='p-4 ' />
                </div>
            </div>

            <div className="flex flex-col p-4 md:p-0 justify-center">

                <h5 className="text-5xl font-semibold tracking-tight  ">{room_name}</h5>
                <h5 className="tracking-tight text-gray-900 dark:text-white"></h5>
                <p className='md:w-[550px]'>{description}</p>
                <div className="mt-6 ">
                    <span className="text-3xl font-bold ">${price}</span>
                </div>
                <div className="hero pb-12" >
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-[350px] md:w-[400px]  shadow-2xl mt-6 glass  bg-purple-400">
                            <form onSubmit={handleBooking} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  font-semibold text-xl">Name</span>
                                    </label>
                                    <input type="email" name='name' placeholder="Email" className="input  input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text   font-semibold text-xl">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input  input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Date</span>
                                    </label>
                                    <input type="date" name='email' placeholder="Email" className="input  input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn  text-white text-lg hover:bg-purple-700 bg-purple-600">Book Now</button>
                                </div>
                              

                            </form>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoomDetails;