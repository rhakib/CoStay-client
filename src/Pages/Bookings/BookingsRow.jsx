import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const BookingsRow = ({ booking, handleDelete, refetch }) => {

    


    const { _id, room_name, price, img1, bookingDate, roomId } = booking;

    const {user} = useAuth()

    const name = user?.displayName
    const img = user?.photoURL


    const [cancel, setCancel] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(5)

    const axios = useAxios()




    const currentDate = new Date();
    console.log(currentDate);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const currentDay = currentDate.getDate();

    const current = `${currentMonth}-${currentDay}-${currentYear}`;

    // const dateStr1 = inputValue;
    const dateStr2 = bookingDate;

    const date1 = new Date(current);
    const date2 = new Date(dateStr2);

    const dayDifference = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

    useEffect(() => {

        setCancel(dayDifference)

    }, [dayDifference])



    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }

    const handleReviewInput = (e) => {
        setReview(e.target.value)
    }
    const handleStars = (e) => {
        setStars(e.target.value)
    }

    console.log(inputValue);

    const handleUpdate = id => {
        console.log(id);

        const updatedDate = {
            inputValue,
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

    const handleReview = () => {

        const userReview = {
            review,
            roomId,
            stars: [stars],
            currentDate,
            name,
            img
        }

        axios.post('/review', userReview)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire(
                        'Review sent!',
                        'Thanks for sharing your experience with us.',
                        'success'
                    )

                }

            })

    }


    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-40 h-32">
                            <img src={img1} alt="Avatar Tailwind CSS Component" />
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
                        <h3 className="font-bold text-lg text-center">Send Review</h3>


                        <div className="modal-action flex flex-col items-center justify-center space-y-4">
                            <form method="dialog" className='space-y-4 gap-4'>
                                <textarea rows='5' cols='50' onChange={handleReviewInput} type="text " className='p-2 rounded-lg' />
                                <p className='font-semibold'>How much you rate us?</p>
                                <select defaultValue={5} onChange={handleStars} className='bg-gray-300 py-1 px-2 rounded-md font-semibold' name="" id="">
                                    <option value="1" >1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                                <div className='flex justify-center gap-4'>
                                    <button onClick={handleReview} className="btn text-white bg-gray-600 hover:bg-gray-800">Send</button>

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

                                {!inputValue ? <button className="btn text-white bg-gray-600 hover:bg-gray-800">Select</button> :<button onClick={() => handleUpdate(_id)} className="btn text-white bg-gray-600 hover:bg-gray-800">Update</button>}

                                <button className="btn bg-red-500 hover:bg-red-800 text-white">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </th>
            <th>
                {
                    cancel <= 1 ? <p className='btn'>confirmed</p> :
                        <button onClick={() => handleDelete(_id)} className="btn">Cancel </button>
                }
            </th>
        </tr>

    );
};

export default BookingsRow;