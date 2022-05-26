import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-28'>
            <h2 className='text-4xl font-bold text-center text-primary my-8'>What our Clients say about us{reviews.length}</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
                reviews.map(review=> <Review
                key={review._id}
                review={review}
                ></Review> )
            }
           </div>
        </div>
    );
};

export default Reviews;