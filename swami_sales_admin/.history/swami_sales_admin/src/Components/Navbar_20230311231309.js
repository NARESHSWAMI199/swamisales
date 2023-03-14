import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import * as actions from '../reducer/actions/auth'
import FireTruckIcon from '@mui/icons-material/FireTruck';

function BrandNavbar(props) {

    useEffect(()=>{
        console.log(props)
    },[])
    return (
        <>
            <Navbar className='color-nav shadow-sm'  variant="dark">
                    <Navbar.Brand href="/" >
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Swami Sales
                    </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" justify-content-end flex-grow-1 pe-3">
                        {
                            (props.isAuthenticated) ?
                             <Nav.Link onClick={props.logout}>Logout</Nav.Link> :
                             <> 
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/signup">Singup</Nav.Link>
                             </>

                        }
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