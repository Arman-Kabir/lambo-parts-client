import React from 'react';

const DeleteModal1 = ({modal}) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <p className='text-2xl font-bold text-info'>{modal.name}</p>
                    
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-success">Product Deleted</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal1;