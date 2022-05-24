import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myorders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(myorders);
    // console.log(user);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyOrders(data)
                });
        }
    }, [user])
    return (
        <div>
            {/* Card to show user information */}

            <div class="card w-96 bg-base-100 shadow-xl my-4">
                <div class="card-body">
                    <h2 class="font-bold text-xl text-primary"> My orders...{myorders.length}</h2>
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.order}</td>
                                <td>{o.orderQuantity}</td>
                                <td>{o.phone}</td>
                                <td>{o.address}</td>
                                <td>{o.payment

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