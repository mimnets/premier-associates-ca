import React from 'react';
import PartnersList from '../PartnersList/PartnersList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurService from '../OurService/OurService';
import OurWorks from '../OurWorks/OurWorks';
import PartnerInfo from '../PartnerInfo/PartnerInfo';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <PartnerInfo></PartnerInfo>
            <OurService></OurService>
            <OurWorks></OurWorks>
            <PartnersList></PartnersList>
            <Footer></Footer>
        </div>
    );
};

export default Home;