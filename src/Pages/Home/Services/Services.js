import React, { useEffect } from 'react';
import { BiSupport } from 'react-icons/bi';
import { TbTruckReturn } from 'react-icons/tb';
import { RiSecurePaymentLine } from 'react-icons/ri';
import DropFileInput from '../../../Components/drag&drop/DropFileInput';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const services = [
        {
            id: 1,
            title: 'Support 24/7',
            icon: <BiSupport />
        },
        {
            id: 2,
            title: 'Return Policy',
            icon: <TbTruckReturn />
        },
        {
            id: 3,
            title: 'Secure Payment',
            icon: <RiSecurePaymentLine />
        }
    ]
    const onFileChange = (files) => {
        console.log(files);
    }
    return (
        <div className='max-w-screen-lg mx-auto my-8'>
            <div className="card w-96 bg-base-100 shadow-md mx-auto shadow-green-700 border-4 border-primary">
                <div className="">
                    <DropFileInput
                        onFileChange={(files) => onFileChange(files)}
                    />
                </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0" data-aos='flip-up'>
                {services.map(({ id, title, icon }) => (
                    <div
                        key={id}
                        className={`shadow-md hover:scale-105 duration-500 py-8 rounded-lg shadow-black flex items-center justify-evenly bg-primary`}>
                        <span className='text-4xl bg-blue-100 p-3 rounded-full'>{icon}</span>
                        <p className="text-xl font-semibold">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;