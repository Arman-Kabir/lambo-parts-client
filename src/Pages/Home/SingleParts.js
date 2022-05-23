import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleParts = ({ parts }) => {
    const navigate = useNavigate();
    const { _id, name, image, description, quantity, minorder } = parts;

    const handlePurchase = id => {
        // console.log(id);
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl">
                <figure><img className='h-48' src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className=''>
                        <p className=''>Available Quantity :{quantity}</p>
                        <p className=''>Minimum Order : {minorder}</p>
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