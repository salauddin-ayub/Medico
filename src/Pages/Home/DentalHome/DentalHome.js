import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import image1 from '../../../assets/Dental&Oral/Listerine.jpeg'
import image2 from '../../../assets/Dental&Oral/Colgate-Active-salt.jpg'
import image3 from '../../../assets/Dental&Oral/Oral-B 1000 Electric Toothbrush.webp'
import image4 from '../../../assets/Dental&Oral/Sensodyne Teeth whitening.jpg'
import image5 from '../../../assets/Dental&Oral//sensodyne-tooth-brush.webp'
import ProductCard from '../../../Components/PoductCard/ProductCard';

const DentalHome = () => {
    const dentalCare = [
        {
            id: 1,
            title: 'Listerine',
            type: 'Mouth Wash',
            img: image1,
            price: 190.00,
        },
        {
            id: 2,
            title: 'Colgate-Active-salt',
            type: 'Tooth Paste',
            img: image2,
            price: 50,
        },
        {
            id: 3,
            title: 'Oral-B 1000 Electric Toothbrush',
            type: 'Electric Tooth Brush',
            img: image3,
            price: 675.00,
        },
        {
            id: 4,
            title: 'Sensodyne Teeth whitening',
            type: 'Tooth Paste',
            img: image4,
            price: 182.00,
        },
        {
            id: 5,
            title: 'Sensodyne-tooth-brush',
            type: 'Tooth Brush',
            img: image5,
            price: 90,
        },
    ]
    return (
        <div className='max-w-6xl mx-auto my-5 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>Dental & Oral Care</h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    dentalCare.map(product => <ProductCard
                        key={product.id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/dental-care'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default DentalHome;