import React from 'react';
import Header from '../Header/Header';
import OurPartner from '../OurPartner/OurPartner';
import OurService from '../OurService/OurService';
import OurWorks from '../OurWorks/OurWorks';
import PartnerInfo from '../PartnerInfo/PartnerInfo';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <PartnerInfo></PartnerInfo>
            <OurService></OurService>
            <OurWorks></OurWorks>
        </div>
    );
};

export default Home;