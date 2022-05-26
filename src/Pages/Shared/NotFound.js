import React from 'react';
import notfound from '../../assets/images/notfound.jpg';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-3xl text-center text-success my-5'>Things u r searching for is not found.</h2>
            <img className='w-1/2' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;