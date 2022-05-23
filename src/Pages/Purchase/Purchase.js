import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user);
    const { id } = useParams();
    const [partsDetails, setPartsDetails] = useState([]);
    // console.log(partsDetails);
    const [on, setOn] = useState(true);
    // console.log(on);

    if (partsDetails) {
        const { _id, name, image, description, quantity, minorder } = partsDetails;
    }

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => setPartsDetails(data))
    }, []);

    // disable or able the submit button
    const handleQuantityChange = event => {
        // console.log(event.target.value);
        if (parseInt(event.target.value) >= parseInt(partsDetails?.minorder)) {
            setOn(false);
        } else {
            setOn(true);
        }
    }

    const handleOrder = event => {
        event.preventDefault();
        // console.log('submit btn clicked');
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const orderQuantity = event.target.orderQuantity.value;
        // console.log(phone,address,orderQuantity);

        const order= {
            orderId: partsDetails?._id,
            order: partsDetails?.name,
            userName:user?.displayName,
            userEmail:user?.email,
            payment: 'false',
            phone,address,orderQuantity,
        }
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            // toast.success('Order Placed');
        })

        console.log(order);
    }

    return (
        <div>
            {/* <h2>Purchase.... {partsDetails?.name}</h2> */}

            <div className=' grid grid-cols-1 lg:grid-cols-2 my-8'>
                {/*  user information */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="">Name :  <span className='text-indigo-500 font-bold'>{user?.displayName}</span></h2>
                        <h3 class="">Email  :  <span className='text-indigo-500'>{user?.email}</span> </h3>

                    </div>
                </div>

                {/* Order fileds */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center font-bold">Order Information Please!!!</h2>
                        <form action="" onSubmit={handleOrder}>
                            <input type="text" placeholder="Your Phone" name='phone' class="input w-full max-w-xs  mt-2" />
                            <input type="text" placeholder="address" name='address' class="input w-full max-w-xs mt-2" />
                            
                            <small className='text-center text-red-500 block'><span>Minimum Order is {partsDetails?.minorder}</span></small>
                            <input type="number" onChange={handleQuantityChange} placeholder='Order Quantity' name='orderQuantity' class="input w-full max-w-xs mt-2" />

                            <input disabled={on} type="submit" value="Order" class="btn w-full max-w-xs mt-2" />
                        </form>
                    </div>
                </div>
            </div>

            {/* Parts details information */}
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={partsDetails?.image} alt="Album" /></figure>

                <div class="card-body">
                    <h2 class="text-center font-bold text-indigo-500">{partsDetails?.name}</h2>
                    <p>{partsDetails?.description}</p>

                    <div className=''>
                        <p className=''>Available Quantity : <span className='text-indigo-500 font-bold'>{partsDetails?.quantity}</span> </p>
                        <p className=''>Minimum Order :  <span className='text-indigo-500 font-bold'>{partsDetails?.minorder}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;