import React, { useEffect } from 'react';
import image1 from '../../../assets/Categories/diabetic.webp';
import image2 from '../../../assets/Categories/health_accesor.jpg';
import image3 from '../../../assets/Categories/vitamins.jpg';
import image4 from '../../../assets/Categories/personal.jpg';
import image5 from '../../../assets/Categories/pad.webp';
import image6 from '../../../assets/Categories/herbal.jpg';
import image7 from '../../../assets/Categories/sexwell.webp';
import image8 from '../../../assets/Categories/baby.webp';
import image9 from '../../../assets/Categories/surgical.jpg';
import image10 from '../../../assets/Categories/DentalCare.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    const categories = [
        {
            id: 1,
            title: 'Diabetic Care',
            img: image1
        },
        {
            id: 2,
            title: 'Supplies & Equipment',
            img: image2
        },
        {
            id: 3,
            title: 'Vitamins & Supplements',
            img: image3
        },
        {
            id: 4,
            title: 'Personal Care',
            img: image4
        },
        {
            id: 5,
            title: 'Women Care',
            img: image5
        },
        {
            id: 6,
            title: 'Herbal Product',
            img: image6
        },
        {
            id: 7,
            title: 'Sexual Wellbeing',
            img: image7
        },
        {
            id: 8,
            title: 'Baby & Mom Care',
            img: image8
        },
        {
            id: 9,
            title: 'Surgical Products',
            img: image9
        },
        {
            id: 10,
            title: 'Dental & Oral Care',
            img: image10
        },

    ]
    return (
        <div className='max-w-6xl mx-auto my-7'>
            <h3 className='text-4xl font-bold text-center mb-3'>Shop By Category</h3>
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0 cursor-pointer">
                {categories.map(({ id, img, title, }) => (
                    <Link to={``}>
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 h py-2 rounded-lg shadow-primary`} data-aos='zoom-in'>
                            <img src={img} alt="" className="w-40 h-36 mx-auto rounded-lg" />
                            <p className="text-lg mt-4">{title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShopByCategory;