import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import DeleteModal1 from './DeleteModal1';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const [allproducts, setAllProducts] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch('https://powerful-scrubland-16062.herokuapp.com/parts', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [allproducts]);

    const handleDelete = (id, ap) => {
        let confirm = window.confirm('Do you want to delete this ????');
        if (confirm) {
            console.log('deleting id', id);

            fetch(`https://powerful-scrubland-16062.herokuapp.com/parts/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.error('Yeah Parts Deleted');

                    }
                    console.log(data);
                })
            setModal(ap);
        }



    }

    return (
        <div>
            {/* Card to show logged-in user information */}
            <div class="card w-96 bg-base-100 shadow-xl my-4">
                <div class="card-body">
                    <h2 class="font-bold text-xl text-primary"> Manage all Products.  . {allproducts.length}  Orders</h2>
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
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Min Order</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allproducts.map((ap, index) => <tr key={ap._id}>
                                <th>{index + 1}</th>

                                <td>{ap.name}</td>
                                <td>{ap.price}</td>
                                <td>{ap.quantity}</td>
                                <td>{ap.minorder}</td>
                                <td>{
                                    <label for="my-modal-6" class="btn modal-button btn btn-xs btn-error" onClick={() => handleDelete(ap._id, ap)}>Delete</label>
                                }</td>

                                {/* <td>{ao.payment === 'false' ?
                                    <button onClick={() => handleDelete(ao._id)} class="btn btn-xs btn-error">Delete</button>
                                    : <button class="btn btn-xs btn-success">Paid</button>
                                }</td> */}

                            </tr>)
                        }


                    </tbody>
                </table>
                {modal && <DeleteModal1
                    key={modal._id}
                    modal={modal}
                ></DeleteModal1>}
            </div>
        </div>
    );
};

export default ManageProducts;