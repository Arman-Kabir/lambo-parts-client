import React from 'react';

const Review = ({ review }) => {
    const { _id, reviewerName, reviewerEmail, rating, description } = review;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl h-full">
                <div class="card-body">
                    <p className='text-warning font-bold text-right'>Rating: <span className='font-bold text-primary text-xl'>{rating}</span> </p>
                    <p className='text-indigo-500 font-bold'>Review: <span className='font-bold  text-zinc-900'>{description}</span> </p>
                    <p className='text-center'>Reviewer: <span className='font-bold text-success text-xl'>{reviewerName}</span> </p>
                    <p className='text-center'>Reviewer Email: <span className='font-bold text-success text-xl'>{reviewerEmail}</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Review;