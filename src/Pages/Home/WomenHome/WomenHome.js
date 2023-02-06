import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import image1 from '../../../assets/womenCare/Freedom Hygeine.jpeg'
import image2 from '../../../assets/womenCare/joya-regular-wings-8-pads.webp'
import image3 from '../../../assets/womenCare/minicon.png'
import image4 from '../../../assets/womenCare/noret.png'
import image5 from '../../../assets/womenCare/Vwash Plus Hygiene Wash.jpg'
import ProductCard from '../../../Components/PoductCard/ProductCard';

const WomenHome = () => {
    const womenCare = [
        {
            id: 1,
            title: 'Freedom Hygeine',
            type: 'Sanitary Napkin',
            img: image1,
            price: 190.00,
        },
        {
            id: 2,
            title: 'Minicon',
            type: 'Tablet',
            img: image3,
            price: 40,
        },
        {
            id: 3,
            title: 'Joya-regular-wings-8-pads',
            type: 'Sanitary Napkin',
            img: image2,
            price: 105.00,
        },
        {
            id: 4,
            title: 'Noret-28',
            type: 'Tablet',
            img: image4,
            price: 22.00,
        },
        {
            id: 5,
            title: 'Vwash Plus Hygiene Wash',
            type: 'Intimate Wash',
            img: image5,
            price: 340.50,
        },
    ]
    return (
        <div className='max-w-6xl mx-auto my-5 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>Women's Care</h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    womenCare.map(product => <ProductCard
                        key={product.id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/women-care'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default WomenHome;