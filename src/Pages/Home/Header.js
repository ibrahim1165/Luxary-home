import React from 'react';
import header from '../../Image/header.png'

const Header = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={header} class="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 class="text-5xl text-accent font-bold">We Build<br />
                        Your Dream</h1>
                    <p class="py-6 text-sm text-gray-600">Online Easte Agency, the mordern way to sell your own home,<br />

                        You can use Griffin Residential to market your property</p>

                    <button className="btn btn-accent btn-outline">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Header;