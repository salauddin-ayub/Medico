import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const ProductCard = ({ product }) => {
    const { id, img, title, type, price } = product;
    return (
        <div
            className={`shadow-md py-2 rounded-lg hover:scale-105 duration-500`}>
            <img src={img} alt="" className="w-40 h-36 mx-auto rounded-lg" />
            <div className='pl-6'>
                {
                    (title.length <= 18) ?
                        <p className="text-lg mt-4">{title}</p>
                        :
                        <p className="text-lg mt-4">{title.slice(0, 18)}...</p>
                }
                <p className='text-gray-500'>{type}</p>
                <div className='flex items-center'>
                    <p>Price: </p>
                    <p className='text-2xl text-green-700'><TbCurrencyTaka /></p>
                    <p className='text-2xl text-green-700'>{price}</p>
                </div>
            </div>
            <div className='text-center'>
                <Link to={`/product-details`}>
                    <PrimaryButton classes={`w-11/12 btn-sm normal-case hover:scale-105 duration-500`}>
                        <span><FaCartPlus size={19} /></span>
                        <span className='ml-3'>Add to Cart</span>
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;