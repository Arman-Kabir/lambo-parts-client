import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const [allorders, setAllOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('http://localhost:5000/allorders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allorders])

    const handleDelete = id => {
        let confirm = window.confirm('Do you want to delete this ????');
        if (confirm) {
            console.log('deleting id', id);

            fetch(`http://localhost:5000/allorders/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.error('Yeah Data Deleted');
                    }
                    console.log(data);
                })
        }
    }

    return (
        <div>
            {/* Card to show logged-in user information */}

            <div class="card w-96 bg-base-100 shadow-xl my-4">
                <div class="card-body">
                    <h2 class="font-bold text-xl text-primary"> Manage Orders.  . {allorders.length}  Orders</h2>
                    <h2 class="font-bold text-xl text-success"> Logged in as</h2>
                    <div>
                        <p>Name: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        {/* <span>Name: {user.email}</span> */}
                    </div>
                </div>
            </div>

            {/* table to show all orders */}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allorders.map((ao, index) => <tr key={ao._id}>
                                <th>{index + 1}</th>

                                <td>{ao.order}</td>
                                <td>{ao.orderQuantity}</td>
                                <td>{ao.userEmail}</td>
                                <td>{ao.phone}</td>
                                <td>{ao.address}</td>
                                <td>{ao.price}</td>

                                <td>{ao.payment === 'false' ?
                                    <button onClick={() => handleDelete(ao._id)} class="btn btn-xs btn-error">Delete</button>
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

export default ManageOrders;