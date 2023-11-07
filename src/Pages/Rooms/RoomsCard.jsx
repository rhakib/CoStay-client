import React from 'react';
import { Link } from 'react-router-dom';

const RoomsCard = ({room}) => {
    const {_id, room_name, description, price, amenities, available_seats, image } = room;
    return (
        <div>
            <div>
            <Link to={`/rooms/${_id}`}><img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='' /></Link>
                <h3 className='text-xl'>{room_name}</h3>
                <Link to={`/rooms/${_id}`}>View</Link>
                {
                    available_seats == 0 ? <h2>Unavailable</h2> :  <Link to={`/rooms/${_id}`}>Book Now</Link>
                }
            </div>
        </div>
    );
};

export default RoomsCard;