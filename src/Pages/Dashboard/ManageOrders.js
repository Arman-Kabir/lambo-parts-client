import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const [allorders, setAllOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('https://powerful-scrubland-16062.herokuapp.com/allorders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allorders])

    const handleStatus = id => {
        // let confirm = window.confirm('Do you want to delete this ????');
        // if (confirm) {
        console.log('changing status', id);

        fetch(`https://powerful-scrubland-16062.herokuapp.com/allorders/${id}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Yeah Status Changed');
                }
                console.log(data);
            })
        // }
    }

    const handleDelete = id => {
        let confirm = window.confirm('Do you want to delete this ????');
        if (confirm) {
            console.log('deleting id', id);

            fetch(`https://powerful-scrubland-16062.herokuapp.com/allorders/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('unpaid Order deleted');
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
                                    <button onClick={() => handleDelete(ao._id)} class="btn btn-xs btn-error">Unpaid</button>
                                    : <div>
                                        {
                                            ao.status === 'shipped' ? <button  class="btn btn-xs  btn-info">Shipped</button>
                                                : <button onClick={() => handleStatus(ao._id)} class="btn btn-xs btn-success">Pending</button>
                                        }

                                    </div>

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