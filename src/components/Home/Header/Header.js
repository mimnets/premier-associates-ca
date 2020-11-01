import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderMain from '../HeaderMain/HeaderMain';
import MiddleNav from '../MiddleNav/MiddleNav';
import './Header.css';

const Header = () => {
    return (
        
            <Container className="header-container">
            <MiddleNav></MiddleNav>
            <HeaderMain></HeaderMain>
            </Container>
        
    );
};

export default Header;