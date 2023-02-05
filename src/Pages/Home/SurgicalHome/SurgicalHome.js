import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import image1 from '../../../assets/surgical/Instruments.jpg'
import image2 from '../../../assets/surgical/Comfit-Surgical-Hand-Gloves-1-Pair-Original-Malaysian-Gloves-with-Packet.jpg'
import image3 from '../../../assets/surgical/n95.jpg'
import image4 from '../../../assets/surgical/Surgical Mask Pack.webp'
import image5 from '../../../assets/surgical/Nichiban tape.jpg'

const SurgicalHome = () => {
    const babyCare = [
        {
            id: 1,
            title: 'Surgical Instruments',
            type: 'Instruments Pack',
            img: image1,
            price: 770.00,
        },
        {
            id: 2,
            title: 'Surgical-Hand-Gloves-1-Pair-Original-Malaysian-Gloves',
            type: 'Hand-Gloves',
            img: image2,
            price: 110,
        },
        {
            id: 3,
            title: 'N-95',
            type: 'Mask',
            img: image3,
            price: 150.00,
        },
        {
            id: 4,
            title: 'Surgical Mask Pack',
            type: 'Mask',
            img: image4,
            price: 180.00,
        },
        {
            id: 5,
            title: 'Nichiban tape Pack',
            type: 'Tape',
            img: image5,
            price: 160,
        },
    ]
    return (
        <div className='max-w-6xl mx-auto my-5 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>Surgical Product</h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer'>
                {babyCare.map(({ id, img, title, type, price }) => (
                    <div
                        key={id}
                        className={`shadow-md py-2 rounded-lg`}>
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
                            <PrimaryButton classes={`w-11/12 btn-sm normal-case hover:scale-105 duration-500`}>
                                <span><FaCartPlus size={19} /></span>
                                <span className='ml-3'>Add to Cart</span>
                            </PrimaryButton>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/surgical-Product'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default SurgicalHome;