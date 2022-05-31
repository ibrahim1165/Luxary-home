import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cover from "../../Group 33069.png"
const Nabver = () => {
    
    return (
        <div className="navbar text-black font-bold mx-auto">
        <div className="navbar-start px-28">
          <div className="dropdown">
      
            <label tabIndex="0" className=" btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>{
              <Link to="/login">Login</Link> 
                }</li>
             
            </ul>
          </div>
          <div className="w-24 rounded-lg">
          <img src={cover} alt="" />
          </div>
          {/* <Link to="/" className="btn btn-ghost normal-case text-xl text-white">Luxury Living</Link> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us </Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
              <Link className="text-end" to="/login">Login</Link> 
                </li>
          </ul> 
        </div>
        {/* <div className="navbar-end">
                      <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                  </div> */}
        
      </div>
    );
}

export default Nabver;