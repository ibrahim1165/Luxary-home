import React, { useEffect, useState } from 'react';

const UserService = id => {
    const [services,  setServices] = useState({})
    useEffect(()=>{
        const url =`https://tranquil-journey-28375.herokuapp.com/service/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => {setServices(data)
        })
    }, [id])
    return [services]
   
};

export default UserService;