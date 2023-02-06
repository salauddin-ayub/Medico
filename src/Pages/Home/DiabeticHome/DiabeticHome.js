import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import image1 from '../../../assets/Diabetics/insulin.jpg';
import image2 from '../../../assets/Diabetics/Glucoleader.jpg';
import image3 from '../../../assets/Diabetics/ACCU CHEK INSTANT 50 PC STRIP . SURGICAL.jpeg';
import image4 from '../../../assets/Diabetics/comet-850-tablet.jpg';
import image5 from '../../../assets/Diabetics/metformin-antidiabetic-tablets.jpg';
import ProductCard from '../../../Components/PoductCard/ProductCard';


const DiabeticHome = () => {
    const products = [
        {
            id: 1,
            title: 'Insulin',
            type: 'Insulin Aspart',
            img: image1,
            price: 150.00,
        },
        {
            id: 2,
            title: 'Glucoleader Blood Suger Tester',
            type: 'Device',
            img: image2,
            price: 2770.00,
        },
        {
            id: 3,
            title: 'ACCU CHEK INSTANT 50 PC STRIP.SURGICAL',
            type: 'Supplies',
            img: image3,
            price: 500,
        },
        {
            id: 4,
            title: 'Comet-850',
            type: 'Tablet',
            img: image4,
            price: 170.00,
        },
        {
            id: 5,
            title: 'Metformin-500',
            type: 'Tablet',
            img: image5,
            price: 270.10,
        },
    ]
    return (
        <div className='max-w-6xl mx-auto my-5 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>Diabetic Care</h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/diabetic-care'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default DiabeticHome;