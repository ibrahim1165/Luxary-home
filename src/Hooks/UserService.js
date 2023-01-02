import React, { useEffect, useState } from 'react';

const UserService = id => {
    const [services,  setServices] = useState({})
    useEffect(()=>{
        const url =`https://lux-home-.up.railway.app/service/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => {setServices(data)
        })
    }, [id])
    console.log(services)
    return [services]
   
};

export default UserService;