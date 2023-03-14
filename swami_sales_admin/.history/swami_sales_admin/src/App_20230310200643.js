import React, {Component }  from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import BrandNavbar from './Components/Navbar';
import SidePannel from './Components/SidePannel';
import * as actions from './reducer/actions/auth'
import { connect } from 'react-redux';
import Dashborad from './Components/Dashborad';

function App (){

  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }

  // render() {
    return (<>
      <BrandNavbar />
    <ProSidebarProvider>
      {/* <Router> */}
          <div className='' style={{ "display": "flex" }}>
            <SidePannel />
            <Dashborad />
          {/* <BaseRouter/> */}
          </div>
      {/* </Router> */}
    </ProSidebarProvider>
    </>);
  // }s
}
// const mapStateToProps = state => {
//   console.log('herereee')
//   return {
//     isAuthenticated: state.token !== null
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   }
// }

export default App;


