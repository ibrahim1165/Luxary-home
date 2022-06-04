import React from 'react';
import { Link} from 'react-router-dom';

const Services = ({ service }) => {
    const { name, price, img,_id } = service;
    return (
        <div className='mb-12'>
            <div class="card w-[360px] h-[335px] bg-base-100 shadow-x items-center">
                <img src={img} alt="service" className="w-[78.69px] h-[78.69px]" />
                <div class="card-body items-center text-accent fond-bold">
                    <h2 class="card-title ">{name}</h2>
                    <p>${price}</p>
                    <p className="text-sm text-center text-gray-500">
                        Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis
                        enim velit mollit
                        </p>
                </div>
                <div className="text-center my-4">
                <Link to={`/order/${_id}`} className="btn btn-accent">Order Now</Link>
            </div>
            </div>   
        </div>
    );
};

export default Services;