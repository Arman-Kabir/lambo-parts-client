import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myorders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(myorders);
    // console.log(user);


    useEffect(() => {
        if (user) {
            fetch(`https://powerful-scrubland-16062.herokuapp.com/orders?userEmail=${user.email}`, {
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
                    setMyOrders(data)
                });
        }
    }, [user])
    return (
        <div>
            {/* Card to show logged-in user information */}

            <div class="card w-96 bg-base-100 shadow-xl my-4">
                <div class="card-body">
                    <h2 class="font-bold text-xl text-primary"> My orders...{myorders.length}</h2>
                    <h2 class="font-bold text-xl text-success"> Logged in as</h2>
                    <div>
                        <p>Name: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        {/* <span>Name: {user.email}</span> */}
                    </div>
                </div>
            </div>

            {/* Table to show Order Details */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((o, index) => <tr key={o._id}>
                                <th>{index + 1}</th>
                                <td>{o.order}</td>
                                <td>{o.orderQuantity}</td>
                                <td>{o.phone}</td>
                                <td>{o.address}</td>
                                <td>{o.price}</td>
                                <td>{o.payment === 'false' ?
                                    <Link to={`/dashboard/payment/${o._id}`}><button class="btn btn-xs btn-warning">Pay</button></Link>
                                    : <button class="btn btn-xs btn-success">Paid</button>
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;