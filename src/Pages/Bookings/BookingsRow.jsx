import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const BookingsRow = ({ booking, handleDelete, refetch }) => {

    console.log(booking);
    const { _id, date, room_name, price, image } = booking;


    const [cancel, setCancel] = useState()
    const [inputValue, setInputValue] = useState('')
    // const [update, setUpdate] = useState(null)
    const axios = useAxios()
    console.log(inputValue);
    let bookedDate = new Date(date).getTime()
    let canUpdateDate = new Date(1699401517200).getTime()
    const difference = ((bookedDate - canUpdateDate) / 86400)


    useEffect(() => {

        setCancel(difference)

    }, [difference])


    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }

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
                axios.patch(`/bookings/${id}`, updatedDate)
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
            <td>{date}</td>
            <th>

           
                <button className="btn" onClick={() => document.getElementById(_id).showModal()}>Update</button>
                <dialog id={_id} className="modal  sm:modal-middle">
                    <div className="modal-box p-20 bg-gray-200">
                        <h3 className="font-bold text-lg text-center">Update booking</h3>


                        <div className="modal-action flex flex-col items-center justify-center space-y-4">
                            <form method="dialog" className='flex gap-4'>
                            <input onChange={handleInputChange}  type="date" className='p-2 rounded-lg' />

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
                        <button onClick={() => handleDelete(_id)} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                }
            </th>
        </tr>

    );
};

export default BookingsRow;