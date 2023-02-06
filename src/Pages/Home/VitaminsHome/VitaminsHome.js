import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import image1 from '../../../assets/Vitamin/B-complex.png'
import image2 from '../../../assets/Vitamin/cod-liver-oil-1000mg.jpg'
import image3 from '../../../assets/Vitamin/E-capsules.jpg'
import image4 from '../../../assets/Vitamin/Vitamin-C-1000mg.webp'
import image5 from '../../../assets/Vitamin/vitamin_B.jpg'
import ProductCard from '../../../Components/PoductCard/ProductCard';

const VitaminsHome = () => {
    const vitamins = [
        {
            id: 1,
            title: 'Vitamin B-complex',
            type: 'Tablet',
            img: image1,
            price: 150.00,
        },
        {
            id: 2,
            title: 'Vitamin Cod-Liver-Oil-1000mg',
            type: 'Capsules',
            img: image2,
            price: 270.00,
        },
        {
            id: 3,
            title: 'Vitamin E-capsules',
            type: 'Capsules',
            img: image3,
            price: 500,
        },
        {
            id: 4,
            title: 'Vitamin-C-1000mg',
            type: 'Tablet',
            img: image4,
            price: 170.00,
        },
        {
            id: 5,
            title: 'Vitamin_B',
            type: 'Capsules',
            img: image5,
            price: 270.50,
        },
    ]
    return (
        <div className='max-w-6xl mx-auto my-5 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>Vitamins & Supplements</h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    vitamins.map(product =>
                        <ProductCard
                            key={product.id}
                            product={product}>
                        </ProductCard>)
                }
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/vitamins-supplement'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default VitaminsHome;