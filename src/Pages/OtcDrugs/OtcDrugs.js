import React, { useEffect, useState } from 'react';

const OtcDrugs = () => {
    const [drugs, setDrugs] = useState([]);
    useEffect(() => {
        fetch('otcDrugs.json')
            .then(res => res.json())
            .then(data => setDrugs(data))
    }, [])
    return (
        <div className='max-w-screen-lg mx-auto my-7'>
            <h3 className='text-4xl font-bold mb-3 text-center'>OTC Drugs</h3>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 cursor-pointer">
                {drugs.map(({ id, img, title, }) => (
                    <div
                        key={id}
                        className={`shadow-md hover:scale-105 duration-500 h py-2 rounded-lg shadow-primary`}>
                        <img src={img} alt="" className="w-40 h-36 mx-auto rounded-lg" />
                        <p className="text-lg mt-4">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtcDrugs;