import React from 'react';
import BabyHome from './BabyHome/BabyHome';
import Banner from './Banner/Banner';
import DentalHome from './DentalHome/DentalHome';
import DiabeticHome from './DiabeticHome/DiabeticHome';
import OtcDrugHome from './OtcDrugHome/OtcDrugHome';
import PersonalCareHome from './PersonalCareHome/PersonalCareHome';
import PrescriptionMedicinesHome from './PrescriptionMedicinesHome/PrescriptionMedicinesHome';
import Services from './Services/Services';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import SuppliesHome from './SuppliesHome/SuppliesHome';
import SurgicalHome from './SurgicalHome/SurgicalHome';
import VitaminsHome from './VitaminsHome/VitaminsHome';
import WomenHome from './WomenHome/WomenHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ShopByCategory />
            <PrescriptionMedicinesHome />
            <OtcDrugHome />
            <DiabeticHome />
            <VitaminsHome />
            <SuppliesHome />
            <PersonalCareHome />
            <BabyHome />
            <WomenHome />
            <DentalHome />
            <SurgicalHome />
        </div>
    );
};

export default Home;