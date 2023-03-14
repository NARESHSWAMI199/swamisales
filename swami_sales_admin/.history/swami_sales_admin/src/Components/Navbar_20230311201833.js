import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg';

function BrandNavbar(props) {
    return (
        <>
            <Navbar className='color-nav'  variant="dark">
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

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            (props.isAuthenticated) ? <Nav.Link href="#home">Logout</Nav.Link> : <Nav.Link href="#link">Login</Nav.Link>
                        }
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    </Nav>
               </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default BrandNavbar;