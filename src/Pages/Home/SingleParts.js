import React from 'react';

const SingleParts = ({parts}) => {
    const {id,name,image,description,quantity,minorder} = parts;
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl">
                <figure><img  className='h-48' src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className=''>
                        <p className=''>Available Quantity :{quantity}</p>
                        <p className=''>Minimum Order : {minorder}</p>
                    </div>

                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;