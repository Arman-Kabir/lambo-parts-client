import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        // console.log('user inside usetoken',user);
        const email = user?.user?.email;
        const currentUser = { email: email };

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'applicatopn/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useTonken', data)
                })
        }


    }, [user]);


    return [token];
};

export default useToken;