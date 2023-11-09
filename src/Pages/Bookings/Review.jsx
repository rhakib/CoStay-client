import React from 'react';

const Review = ({ rating }) => {
    console.log(rating);
    const { stars, review, currentDate } = rating

    console.log(stars, review);

    return (

        <div className='space-y-6 border p-6'>
            <div className="flex items-center mb-4 space-x-4">
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_-YhhKYVQiw5tD49InIqZMOpiqAaE7T79jUbNds&s" />
                    </div>
                </div>
                <div className="space-y-1 font-medium dark:text-white">
                    <p>Jese Leos <time dateTime={currentDate} className="block text-sm text-gray-500 dark:text-gray-400">{currentDate}</time></p>
                </div>
            </div>
            <div>
                <h2>Reviews : {review}</h2>
                <div>
                    {
                        stars?.map((review, index) => (
                            <div key={index}>
                                <p>Rating: {Array.from({ length: (review) }, (_, i) => <span className='text-orange-500 text-xl' key={i}>&#9733;</span>)}</p>

                                <hr />
                            </div>
                        ))}
                </div>
            </div>


            <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{stars} people found this helpful</p>
                <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                    <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                    <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                </div>
            </aside>
        </div>


    );
};

export default Review;