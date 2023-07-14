import React, { useEffect } from 'react';
import image1 from '../../assets/about.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='max-w-6xl mx-auto'>
            <h3 className='text-3xl mt-7 text-center font-semibold'>About Us</h3>
            <div className="hero max-w-5xl mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 my-8' data-aos="fade-right">
                        <img src={image1} className=" w-10/12 rounded-lg shadow-2xl" alt='' style={{ height: '350px' }} />

                    </div>
                    <div className='lg:w-1/2 mb-10' data-aos="fade-left">
                        <p className='text-xl'><span className='text-4xl text-primary'>Medico</span> is a online medicine shop. We are focused on getting your necessary medicine & giving you great healthcare support. We have highest collection of foreign and local medicine. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and many more products. You can upload your prescriptions an order your medicine. Our order process is very simple and easy.</p>

                    </div>
                </div>
            </div>
            <div className='card max-w-6xl mx-auto my-5 shadow-md bg-white shadow-primary mb-8' data-aos="zoom-in">
                <div className='card-body'>
                    <h3 className='text-2xl font-semibold text-center text-primary'>Providing Quality Service is Our Priority</h3>
                    <p className='text-lg text-center'>At medico we have lots of medicines available at the best prices. Our medicine inventories are directly supplied form the largest pharmaceutical companies and thus we ensure longest expiry dates for our all medicines and products and also authentic medicines. The model pharmacies are supervised by A Category Pharmacists who ensures the best service for our customers.</p>
                </div>
            </div>
            <div className='card max-w-6xl mx-auto my-5 shadow-md bg-white shadow-primary mb-8' data-aos="zoom-in">
                <div className='card-body'>
                    <h3 className='text-2xl font-semibold text-center text-primary'>Easy Accessed Website</h3>
                    <p className='text-lg text-center'>Our website is easily accessible for the users. Users can upload their prescription. Easy Register and Login system. We have secure payment method. Just find your required medicine at Medico.</p>
                </div>
            </div>
            <div className='card max-w-6xl mx-auto my-5 shadow-md bg-white shadow-primary mb-8' data-aos="zoom-in">
                <div className='card-body'>
                    <h3 className='text-2xl font-semibold text-center text-primary'>Delivery Services</h3>
                    <p className='text-lg text-center'>Our delivery services are tailored upon your need we provide our regular delivery <b>within 4 hours</b> of order being accepted. For people who needs the orders delivered quickly <b>we have an Urgent Delivery providing all orders to be served within 45 minutes</b>.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;