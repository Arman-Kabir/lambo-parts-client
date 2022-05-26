import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleAddToProfile = event => {
        event.preventDefault();
        console.log('abc');

        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkedin = event.target.linkedin.value;
        // console.log(rating, description);

        const profile={
            name:user.displayName,
            email:user.email,
            education,
            location,
            phone,
            linkedin,
        };
        console.log(profile);

        // sending review to server
        fetch('http://localhost:5000/profile',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(profile)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('profile info added');
            }
            console.log(data);
        })
    }
    return (
        <div>
            {/* Card to show logged-in user information */}
            <div class="card w-96 bg-base-100 shadow-xl my-4">
                <div class="card-body">
                    <h2 class="font-bold text-xl text-primary"> {user.displayName}'s Profile...</h2>
                    <p>Email: {user.email}</p>
                </div>
            </div>
            {/* my profile information */}
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-success">My Profile</h2>

                </div>
            </div>

            {/* Add to my profile form field */}

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl">Add To My Profile</h2>

                    <form action="" onSubmit={handleAddToProfile}>
                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Education</span>
                            <input type="text" name='education' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Location</span>
                            <input type="text" name='location' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Phone</span>
                            <input type="text" name='phone' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Linked In Profile Link</span>
                            <input type="text" name='linkedin' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <input type="submit" value='SUBMIT' class="btn mt-4 w-full max-w-xs" />
                    </form>

                </div>
            </div>

        </div>

    );
};

export default MyProfile;