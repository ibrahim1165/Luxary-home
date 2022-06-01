import React from 'react';

const Service = ({ service }) => {
    const { name, price, img } = service;
    return (
        <div>
            <div class="card w-[360px] h-[335px] bg-base-100 shadow-x items-center">
                <img src={img} alt="service" className="w-[78.69px] h-[78.69px]" />
                <div class="card-body items-center text-accent fond-bold">
                    <h2 class="card-title ">{name}</h2>
                    <p>${price}</p>
                    <p className="text-sm text-center text-gray-500 mt-[-50px]">Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis
                        enim velit mollit</p>
                </div>
            </div>   
        </div>
    );
};

export default Service;