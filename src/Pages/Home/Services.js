import React from 'react';
import pic1 from '../../Icon/apartment 1.png'
import pic2 from '../../Icon/affordable 1.png'
import pic3 from '../../Icon/lessee 1.png'
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {
    const services =[
        {
            id:1,
            name:'Office Interior Design',
            price:299,
            img:pic1,
        },
        {
            id:2,
            name:'Showroom Design',
            price:399,
            img:pic2,
        },
        {
            id:1,
            name:'Residential/ Home',
            price:499,
            img:pic3,
        }
    ]
    return (
        <div>
            <div className="text-center text-accent my-12">
                <h4>Service</h4>
                <h1 className="text-3xl font-bold">We re an agency tailored to all<br /> clients needs that always delivers</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-8 mt-8">
                {
                    services.map(service=><Service
                    key={service.id}
                    service={service}
                    
                    ></Service>)
                }
            </div>
            <div className="text-center my-4">
                <Link to="/service" className="btn btn-accent">Explor More</Link>
            </div>
        </div>
    );
};

export default Services;