import React,{useState,useEffect} from 'react';
import Services from './Services';


const Service = () => {
   
    const [services , setService]=useState([])
    useEffect(()=>{
        fetch("https://lux-home-.up.railway.app/service")
        .then(res=>res.json())
        .then(data=>setService(data))}   
    ,[])
    return (
        <div>
            <div className="text-center text-accent my-12">
                <h4>Service</h4>
                <h1 className="text-3xl font-bold">We re an agency tailored to all<br /> clients needs that always delivers</h1>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto px-8 mt-10">
                {
                    services.map(service=><Services
                    key={service._id}
                    service={service}
                    
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default Service;