import React, { useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import BookingsRow from './BookingsRow';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const MyBookings = () => {

    const { user } = useAuth()
    const axios = useAxios()

    const getBookings = async () => {
        const res = await axios.get(`/bookings`)
        return res;

    }

    const {
        data: bookings,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ['bookings',],
        queryFn: getBookings
    })
    console.log(bookings?.data);

    if (isLoading) {
        return <div className='flex justify-center min-h-screen'><span className="loading loading-spinner loading-lg"></span></div>


    }



    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure you want to cancel?',
            text: "But, no worries. You can book again",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, please!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/bookings/${id}`,)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Canceled!',
                                'Your booking has been canceled.',
                                'success'
                            )
                            refetch()


                        }

                    })
            }
        })
    }



    return (
        <div className='max-w-[1200px] mx-auto w-full'>
            <h2 className='text-center text-3xl my-4'>Your Total Bookings: {bookings?.data.length}</h2>
            {
                bookings?.data.length > 0 ? <div className="overflow-x-auto mt-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price/Per Night</th>
                                <th>Date</th>
                                <th>Update</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookings?.data.map(booking => <BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete} refetch={refetch}></BookingsRow>)

                            }


                        </tbody>

                    </table>
                </div> : <h2 className='text-2xl py-20 font-semibold text-center'>You didn&#39;t book any room yet, you can visit <Link to='/rooms'><span className='text-purple-700'>Explore rooms</span></Link> to book our rooms</h2>
            }
        </div>
    );
};

export default MyBookings;