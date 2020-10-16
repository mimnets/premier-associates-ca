import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import FooterCredits from '../Footer/FooterCredits';
import Header from '../Header/Header';
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
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
            <FooterCredits></FooterCredits>
        </div>
    );
};

export default Home;