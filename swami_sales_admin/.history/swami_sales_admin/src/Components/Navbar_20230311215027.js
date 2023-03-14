import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import * as actions from '../reducer/actions/auth'


function BrandNavbar(props) {

    useEffect(()=>{
        console.log(props)
    },[])
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
                            (props.isAuthenticated) ? <Nav.Link onChange={props.logout}>Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>
                        }
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    </Nav>
               </Navbar.Collapse>
            </Navbar>
        </>
    );

    
}


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(BrandNavbar);

// export default BrandNavbar;