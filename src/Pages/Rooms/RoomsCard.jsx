import React from 'react';
import { Link } from 'react-router-dom';

const RoomsCard = ({ room }) => {
    const { _id, room_name, description, price, amenities, available_seats, image } = room;
    return (
        <div>
            <div className='relative'>
                <Link to={`/rooms/${_id}`}><img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='' /></Link>
                <h3 className='text-xl text-center'>{room_name}</h3>
                <button className='btn'>${price}/Night</button>
                <div className='flex items-center gap-6 absolute top-32 left-20'>
                    <Link to={`/rooms/${_id}`}><button className='btn'>View</button></Link>
                    {
                        available_seats == 0 ? <h2 className='btn'>Unavailable</h2> : <Link to={`/rooms/${_id}`}><button className='btn'>Book Now</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;