import React from 'react';
import located from '../../Icon/Group 33011.png'
const Project = ({ project }) => {
    const { name, location, img } = project;
    return (

        <div class="card w-[368px] h-[483px] my-12">
            <figure><img src={img} alt="home" className="w-[395px] h-[397.64px]" /></figure>
            <div class="card-body items-center">
                <h2 class="card-title text-xl font-bold text-accent">{name}</h2>
                <div class="card-actions justify-center">
                    <img src={located} alt=""  className="w-4 h-4"/>
                <small>{location}</small>
                </div>
            </div>
        </div>
    );
};

export default Project;