import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        // console.log('user inside usetoken',user);
        const email = user?.user?.email;
        const currentUser = { email: email };

        if (email) {
            fetch(`https://powerful-scrubland-16062.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'applicatopn/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useTonken', data);
                    const accessToken= data.token;
                    localStorage.setItem('accessToken',accessToken);
                    setToken(accessToken);
                })
        }


    }, [user]);


    return [token];
};

export default useToken;