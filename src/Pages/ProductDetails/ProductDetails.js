import React, { useState } from 'react';
import image1 from '../../assets/medicines/prescription/Monas 10.jpg';
import { TbCurrencyTaka, TbMinus, TbPlus } from 'react-icons/tb';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import { FaCartPlus } from 'react-icons/fa';
const ProductDetails = () => {

    const medicine = [
        {
            id: 1,
            title: 'Monas 10',
            type: 'Tablet',
            img: image1,
            generics: 'Montelukast Sodium 10mg',
            company: 'The ACME Laboratories Ltd.',
            price: 15,
        },

    ]

    return (
        <div>
            {
                medicine.map(({ id, img, title, type, price, generics, company }) => (<div className="hero py-8">
                    <div className="hero-content max-w-6xl mx-auto flex-col lg:flex-row">
                        <div className='lg:w-1/2 lg:mr-16 lg:mb-6' data-aos='zoom-in-right'>
                            <img src={img} className="rounded-lg shadow-md shadow-primary" alt='' />
                        </div>
                        <div className='lg:w-1/2' data-aos='zoom-in-left'>
                            <h1 className="text-4xl font-bold">{title}</h1>
                            <p className='text-lg text-gray-600'>{type}</p>
                            <p className='text-lg text-secondary'>Generics: {generics}</p>
                            <p className='text-lg'>Company: {company}</p>
                            <div className='mt-3'>
                                <div className='flex items-center'>
                                    <p className='text-2xl'>Price: </p>
                                    <p className='text-3xl text-green-700'><TbCurrencyTaka /></p>
                                    <p className='text-3xl text-green-700'>{price}</p>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-xl font-semibold mb-3'>Quantity:</p>
                                    <div className='flex items-center justify-between mb-5'>
                                        <div className='flex items-center'>
                                            <input type="radio" name="radio-1" className="radio radio-primary" />
                                            <p className='text-lg ml-3'>1 Piece</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <button className="btn btn-accent btn-sm p-1"><TbMinus size={18} /></button>
                                            <p className='bg-gray-200 text-lg rounded-lg px-3 py-1 mx-3'>0</p>
                                            <button className="btn btn-primary btn-sm p-1"><TbPlus size={18} /></button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between mb-5'>
                                        <div className='flex items-center'>
                                            <input type="radio" name="radio-1" className="radio radio-primary" />
                                            <p className='text-lg ml-3'>1 Strip</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <button className="btn btn-accent btn-sm p-1"><TbMinus size={18} /></button>
                                            <p className='bg-gray-200 text-lg rounded-lg px-3 py-1 mx-3'>0</p>
                                            <button className="btn btn-primary btn-sm p-1"><TbPlus size={18} /></button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center'>
                                            <input type="radio" name="radio-1" className="radio radio-primary" />
                                            <p className='text-lg ml-3'>1 Box</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <button className="btn btn-accent btn-sm p-1"><TbMinus size={18} /></button>
                                            <p className='bg-gray-200 text-lg rounded-lg px-3 py-1 mx-3'>0</p>
                                            <button className="btn btn-primary btn-sm p-1"><TbPlus size={18} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <PrimaryButton classes={`w-4/6 h-12 btn-sm normal-case hover:scale-105 duration-500`}>
                                        <span><FaCartPlus size={25} /></span>
                                        <span className='ml-3 text-xl'>Add to Cart</span>
                                    </PrimaryButton>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default ProductDetails;