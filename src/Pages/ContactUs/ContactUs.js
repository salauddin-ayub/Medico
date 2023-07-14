import React from 'react';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div className=" px-8 my-8">
            <div>
                <p className="py-6 text-2xl font-bold text-center lg:text-left lg:ml-28">Please send your message below. We will get back to you at the earliest!</p>
            </div>
            <div className="card w-10/12 mx-auto shadow-md bg-white shadow-primary">
                <div className="card-body">
                    <form action="">
                        <div className=' lg:flex justify-between'>
                            <div className="form-control mb-4">
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-4">
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-4">
                                <input type="text" placeholder="Phone" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                rows="5"
                                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <PrimaryButton classes={`btn-sm normal-case mx-auto flex items-center rounded-md hover:scale-105 duration-500`}>
                                <span className='text-xl'>
                                    Send
                                </span>
                                <FaArrowRight className='ml-1' />
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center my-16">
                <h1 className="text-2xl">Whatever You want, Just Let us Know</h1>
                <div className='flex items-center justify-center'>
                    <FaPhoneAlt className='mr-3 text-primary' size={20} />
                    <p className="py-6 text-xl">
                        Call Us:
                        +880-1321214124
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <MdEmail className='mr-3 text-primary' size={25} />
                    <p className="text-xl">
                        Email Us:
                        Medico@gmail.com
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;