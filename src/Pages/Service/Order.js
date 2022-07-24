import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UserService from '../../Hooks/UserService';

const Order = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [user]= useAuthState(auth)
    const [services] = UserService(id)
    const handleSubmit=event=>{
        event.preventDefault()
        const order = {
            email: user.email,
            service: services.name,
            price: services.price,
            id: id,
            quantity:event.target.quantity?.value,
            address: event.target.address?.value,
            phone: event.target.phone?.value,
        }
        fetch('https://tranquil-journey-28375.herokuapp.com/order', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if (data.insertedId) {
                toast(`Your Order Completed to ${services.name}`)
            }
            
            event.target.reset();
          
        })
        navigate('/se')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
            <div className="hero min-h-screen mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <h1 className="text-center text-2xl font-bold text-orange-400 mt-2">Please Your Order </h1>
                        <div className="card-body w-96 mb-6 grid grid-cols-2 md:grid-cols-2 gap-6 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="text" value={user?.displayName} placeholder="name" className="input input-bordered text-black" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text" value={user?.email}  placeholder="email" className="input input-bordered text-black" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Service</span>
                                </label>
                                <input type="text" value={services.name}  name="service" placeholder="service" className="input input-bordered text-black" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="quantity" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="address" className="input input-bordered text-black" autoComplete='off' required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Phone Number</span>
                                </label>
                                <input type="text" name="phone" placeholder="number" className="input input-bordered text-black" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary ">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
};

export default Order;