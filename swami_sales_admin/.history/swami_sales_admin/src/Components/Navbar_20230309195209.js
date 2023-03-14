import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';

function BrandNavbar() {
    return (
        <>
            <Navbar className='color-nav shadow-lg'  variant="light">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default BrandNavbar;