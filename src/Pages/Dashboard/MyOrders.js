import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myorders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyOrders(data)
                });
        }
    }, [user])
    return (
        <div>
            <h2>My orders...{myorders.length}</h2>
        </div>
    );
};

export default MyOrders;