import React from 'react';

const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const {_id, date, room_name, price, image } = booking;




    return (
        <tr>
            
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-40 h-32">
                            <img src="https://i.ibb.co/xfLsypD/495698796.jpg" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
            {room_name}
            </td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Update</button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>

    );
};

export default BookingsRow;