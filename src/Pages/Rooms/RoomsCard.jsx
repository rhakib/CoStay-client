import React from 'react';

const RoomsCard = ({room}) => {
    const {room_name, description, price, amenities, available_seats, image } = room;
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="" className='' />
            </div>
        </div>
    );
};

export default RoomsCard;