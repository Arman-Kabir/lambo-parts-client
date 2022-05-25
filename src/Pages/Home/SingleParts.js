import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleParts = ({ parts }) => {
    const navigate = useNavigate();
    const { _id, name, image, description, quantity, minorder, price } = parts;

    const handlePurchase = id => {
        // console.log(id);
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl h-full">
                <figure><img className='h-48' src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className=''>
                        <p className=''>Available Quantity :<span className='font-bold text-success'> {quantity}</span></p>
                        <p className=''>Minimum Order :<span className='font-bold text-success'> {minorder}</span></p>
                        <p className=''>Price : <span className='font-bold text-success'>    {price}</span></p>
                    </div>

                    <div class="card-actions justify-end">
                        <button onClick={() => handlePurchase(_id)} class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;