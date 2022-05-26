import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddaReview = () => {
    const [user] = useAuthState(auth);
    const [submitOn, setSubmitOn] = useState(false);

    // let ratingError;

    const handleRating = event => {
        const rating = parseInt(event.target.value);
        console.log(rating);

        if (rating > 5 || rating < 1) {
            setSubmitOn(true);
        }
        else {
            setSubmitOn(false);
        }
    }

    const handleAddReview = event => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const description = event.target.description.value;
        console.log(rating, description);

        const review={
            reviewerName:user.displayName,
            reviewerEmail:user.email,
            rating,
            description
        };
        console.log(review);

        // sending review to server
        fetch('https://powerful-scrubland-16062.herokuapp.com/review',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Review added');
            }
            console.log(data)
        })
    }
    return (
        <div>
            {/* Card to show logged-in user information */}
            <div class="card w-96 bg-base-100 shadow-xl my-4">
                <div class="card-body">
                    <h2 class="font-bold text-xl text-primary"> Add a Review Page</h2>
                    <h2 class="font-bold text-xl text-success"> Logged in as</h2>
                    <div>
                        <p>Name: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        {/* <span>Name: {user.email}</span> */}
                    </div>
                </div>
            </div>
            
            {/* add a review form field */}
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl">Add Review Field</h2>

                    <form action="" onSubmit={handleAddReview}>
                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Rating</span>
                            <input type="number" name='rating' onChange={handleRating} placeholder="Rating" class="input input-bordered w-full max-w-xs" />
                            {submitOn == false ? <p></p> : <p className='text-center text-red-500 font-bold'>Value Must be between 1 to 5</p>}
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Description</span>
                            <input type="text" name='description' placeholder="Description" class="input input-bordered input-lg w-full max-w-xs" />
                        </div>

                        <input disabled={submitOn} type="submit" value='SUBMIT' class="btn mt-4 w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddaReview;