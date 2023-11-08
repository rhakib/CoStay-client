import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const BookingsRow = ({ booking, handleDelete, refetch }) => {


    const { _id, room_name, price, image, bookingDate, roomId } = booking;


    const [cancel, setCancel] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [review, setReview] = useState('')
    // const [update, setUpdate] = useState(null)
    const axios = useAxios()
    console.log(inputValue);
    let bookedDate = new Date(bookingDate).getTime()
    let canUpdateDate = 1699401517200;
    const difference = ((bookedDate - canUpdateDate) / 86400)
    console.log(bookedDate, difference, cancel);


    useEffect(() => {

        setCancel(difference)

    }, [difference])



    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }

    const handleReviewInput = (e) => {
        setReview(e.target.value)
    }

    console.log(review);

    const handleUpdate = id => {
        console.log(id);

        const updatedDate = {
            inputValue
        }
        Swal.fire({
            title: 'Are you sure you want to update?',
            text: "But, no worries. You can book anytime",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, please!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`/bookings/${id}`, updatedDate)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your booking has been updated.',
                                'success'
                            )
                            refetch()


                        }

                    })
            }
        })

    }

    const handleReview = (id) =>{

        const userReview = {
            review
        }
        
        axios.put(`/bookings/${id}`, userReview )
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire(
                                'Added!',
                                'Your booking has been updated.',
                                'success'
                            )
                            refetch()


                        }

                    })

    }

  
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
            <td>${price}</td>
            <td>{bookingDate}</td>
            <td><button className="btn" onClick={() => document.getElementById(roomId).showModal()}>Review</button>
                <dialog id={roomId} className="modal  sm:modal-middle">
                    <div className="modal-box p-20 bg-gray-200">
                        <h3 className="font-bold text-lg text-center">Update booking</h3>


                        <div className="modal-action flex flex-col items-center justify-center space-y-4">
                            <form onSubmit={() => handleReview(roomId)} method="dialog" className='space-y-4 gap-4'>
                                <input rows='5' cols='50' onChange={handleReviewInput} type="text " className='p-2 rounded-lg' />

                                <div className='flex justify-center gap-4'>
                                    <button className="btn text-white bg-green-600 hover:bg-green-800">Send</button>

                                    <button className="btn bg-red-500 hover:bg-red-800 text-white">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog></td>
            <th>
                <button className="btn" onClick={() => document.getElementById(_id).showModal()}>Update</button>
                <dialog id={_id} className="modal  sm:modal-middle">
                    <div className="modal-box p-20 bg-gray-200">
                        <h3 className="font-bold text-lg text-center">Update booking</h3>


                        <div className="modal-action flex flex-col items-center justify-center space-y-4">
                            <form method="dialog" className='flex gap-4'>
                                <input onChange={handleInputChange} type="date" className='p-2 rounded-lg' />

                                <button onClick={() => handleUpdate(_id)} className="btn text-white bg-green-600 hover:bg-green-800">Update</button>

                                <button className="btn bg-red-500 hover:bg-red-800 text-white">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </th>
            <th>
                {
                    cancel < 1 ? <p className='btn'>confirmed</p> :
                        <button onClick={() => handleDelete(_id)} className="btn">Cancel </button>
                }
            </th>
        </tr>

    );
};

export default BookingsRow;