import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import image1 from '../../../assets/personal/DettolLiquid.webp';
import image2 from '../../../assets/personal/ACI Aerosol.webp';
import image3 from '../../../assets/personal/savlon-antiseptic-liquid-1l.jpg';
import image4 from '../../../assets/personal/dr-rhazes-mosquito-spray-73-gm-free-ultra-protect-spray-110-ml-2-pcs.jpeg';
import image5 from '../../../assets/personal/odomas.jpeg';
import ProductCard from '../../../Components/PoductCard/ProductCard';

const PersonalCareHome = () => {
    const products = [
        {
            id: 1,
            title: 'Dettol Liquid',
            type: 'Liquid',
            img: image1,
            price: 150.00,
        },
        {
            id: 2,
            title: 'ACI Aerosol',
            type: 'Spray',
            img: image2,
            price: 270.00,
        },
        {
            id: 3,
            title: 'Savlon Antiseptic Liquid',
            type: 'Liquid',
            img: image3,
            price: 200,
        },
        {
            id: 4,
            title: 'Dr-rhazes-mosquito-spray-73-gm-free-ultra-protect-spray-110-ml',
            type: 'Spray',
            img: image4,
            price: 470.00,
        },
        {
            id: 5,
            title: 'Odomas',
            type: 'Cream',
            img: image5,
            price: 130.50,
        },
    ]
    return (
        <div className='max-w-6xl mx-auto my-5 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>Personal Care</h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/personal-care'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default PersonalCareHome;