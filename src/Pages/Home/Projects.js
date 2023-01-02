import React from 'react';
import pic1 from '../../Image/pic1.png'
import pic2 from '../../Image/pic2.png'
import pic3 from '../../Image/pic3.png'
import Project from './Project';

const Projects = () => {
    const projects=[
        {
            id:1,
            name:'Villa on Washington Avenue',
            img:pic1,
            location:'Dhaka, Bangladesh'
        },
        {
            id:2,
            name:'Luxury villa in Rego Park',
            img:pic3,
            location:'Dhaka, Bangladesh'
        },
        {
            id:3,
            name:'Gorgeous house',
            img:pic2,
            location:'Dhaka, Bangladesh'
        },


    ]
    return (
        <div>
            <div className="text-center text-accent">
                <h3>Projects</h3>
                <p className="text-3xl font-bold ">Discover the latest Interior Design <br />available today</p>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto px-8 mt-6">
                {
                    projects.map(project=><Project
                    key={project.id}
                    project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;