import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const handleAddProduct = event => {
        event.preventDefault();
        // console.log('abc');

        const name = event.target.name.value;
        const price = event.target.price.value;
        const image = event.target.image.value;
        const quantity = event.target.quantity.value;
        const minorder = event.target.minorder.value;
        const description = event.target.description.value;
        // console.log(rating, description);

        const product = {
            name,           
            minorder,
            price,
            image,
            quantity,
            description
        };
        // console.log(profile);

        // sending profile info to server
        fetch(`https://powerful-scrubland-16062.herokuapp.com/parts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedId) {
                    toast.success('profile info added');
                }
                console.log(data);
            })
    }

    return (
        <div>
            {/* Card to show logged-in user information */}
            <div class="card w-96 bg-base-100 shadow-xl my-4 py-2">
                <h2 class="font-bold text-xl text-primary"> Add Products. </h2>

                <div class="">
                    <h2 class="font-bold text-xl text-primary"> {user.displayName}'s Profile...</h2>
                    <p>Email: {user.email}</p>
                </div>
            </div>

            {/* Add to my profile form field */}

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl">Add Products</h2>

                    <form action="" onSubmit={handleAddProduct}>
                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Name</span>
                            <input type="text" name='name' placeholder="product name" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Price</span>
                            <input type="text" name='price' placeholder="Price" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Image</span>
                            <input type="text" name='image' placeholder="Product Image url" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Quantity</span>
                            <input type="text" name='quantity' placeholder="Quantity" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Minimum Order</span>
                            <input type="text" name='minorder' placeholder="Minimum Order" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <span className='pr-2 block text-center font-bold text-info'>Description</span>
                            <input type="text" name='description' placeholder="Description" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <input type="submit" value='Add Product' class="btn mt-4 w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;