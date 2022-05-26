import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [profile, setProfile] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(profile);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/profile?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setProfile(data)
                });
        }
    }, [user])

    const handleAddToProfile = event => {
        // event.preventDefault();
        console.log('abc');

        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkedin = event.target.linkedin.value;
        // console.log(rating, description);

        const profile = {
            name: user.displayName,
            email: user.email,
            education,
            location,
            phone,
            linkedin,
        };
        console.log(profile);

        // sending review to server
        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('profile info added');
                }
                console.log(data);
            })
    }
    return (
        <div>
            {/* Card to show logged-in user information */}
            <div class="card w-96 bg-base-100 shadow-xl my-4 py-2">
                <div class="">
                    <h2 class="font-bold text-xl text-primary"> {user.displayName}'s Profile...</h2>
                    <p>Email: {user.email}</p>
                </div>
            </div>

            {/* my profile information */}
            <div class="card w-96 bg-base-100 shadow-xl p-2">
                <div class="">
                    <h2 class="text-center font-bold text-success">{profile.length > 0 ? <p>My Profile</p> : <p>Profile Data Not Added</p>}</h2>
                    <p className='text-xl font-bold'>{profile?.education}</p>
                    <p className='text-xl font-bold'>{profile?.location}</p>
                    <p className='text-xl font-bold'>{profile?.phone}</p>
                    <p className='text-xl font-bold'>{profile?.linkedin}</p>

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