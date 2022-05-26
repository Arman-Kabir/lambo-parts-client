import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [user] = useAuthState(auth);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            {/* Card to show logged-in user information */}

            <div class="card w-96 bg-base-100 shadow-xl my-4">
                <div class="card-body">
                    {/* <h2 class="font-bold text-xl text-primary"> My orders...{myorders.length}</h2> */}
                    <div>
                        <p className='font-bold text-2xl text-primary'>Logged in </p>
                        <p>Name: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        {/* <span>Name: {user.email}</span> */}
                    </div>
                </div>
            </div>

            <h2 className='text-2xl text-success my-2'>Make Admin: Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;