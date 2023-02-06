import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import image1 from '../../../assets/babyCare/Lactogen 1.webp'
import image2 from '../../../assets/babyCare/bashundhara-baby-wipes-sky-blue-120-pcs.jpeg'
import image3 from '../../../assets/babyCare/Eldomilk-1-growing-up-milk-powder.webp'
import image4 from '../../../assets/babyCare/Johnson & Johnson Baby Lotion - 500ml.jpeg'
import image5 from '../../../assets/babyCare/Pampers-Baby-Diaper-Pant.png'
import ProductCard from '../../../Components/PoductCard/ProductCard';

const BabyHome = () => {
    const babyCare = [
        {
            id: 1,
            title: 'Lactogen-1',
            type: 'Milk Powder',
            img: image1,
            price: 520.00,
        },
        {
            id: 2,
            title: 'Bashundhara-baby-wipes-sky-blue-120-pcs',
            type: 'Baby wipes',
            img: image2,
            price: 190.00,
        },
        {
            id: 3,
            title: 'Eldomilk-1-growing-up-milk-powder',
            type: 'Milk Powder',
            img: image3,
            price: 530,
        },
        {
            id: 4,
            title: 'Johnson & Johnson Baby Lotion - 500ml',
            type: 'Lotion',
            img: image4,
            price: 370.00,
        },
        {
            id: 5,
            title: 'Pampers-Baby-Diaper-Pan',
            type: 'Diaper',
            img: image5,
            price: 270.50,
        },
    ]
    return (
        <div className='max-w-6xl mx-auto my-5 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>Baby & Mom Care</h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    babyCare.map(product => <ProductCard
                        key={product.id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/baby-care'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default BabyHome;