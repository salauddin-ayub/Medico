import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const OtcDrugHome = () => {
    const [drugs, setDrugs] = useState([]);

    useEffect(() => {
        fetch('otcDrugs.json')
            .then(res => res.json())
            .then(data => setDrugs(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto my-7 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>OTC Drugs</h3>
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0 cursor-pointer">
                {drugs.slice(-5).map(({ id, img, title, }) => (
                    <Link to={`/otcDrugs`}>
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 h py-2 rounded-lg shadow-primary`}>
                            <img src={img} alt="" className="w-40 h-36 mx-auto rounded-lg" />
                            <p className="text-lg mt-4">{title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/otc-drugs'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default OtcDrugHome;