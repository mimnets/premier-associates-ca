import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        
            <Container style={{backgroundColor:'#EEF5DB'}} className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            </Container>
        
    );
};

export default Header;