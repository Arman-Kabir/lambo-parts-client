import React, { useEffect, useState } from 'react';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-8'>Our Exclusive Parts{parts.length}</h2>

            <div className='grid grid-cols-3 gap-4 mx-auto'>
                {
                    parts.map(parts => <SingleParts
                        key={parts._id}
                        parts={parts}
                    ></SingleParts>)
                }
            </div>
        </div>
    );
};

export default Parts;