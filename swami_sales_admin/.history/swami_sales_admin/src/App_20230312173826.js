import React, { useEffect, useState }  from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import BrandNavbar from './Components/Navbar';
import SidePannel from './Components/SidePannel';
import { connect } from 'react-redux';
import  * as actions from './reducer/actions/auth'



function App(props) {


  useEffect(()=>{
    props.onTryAutoSignup()
  },[])

  return (<>
   <ProSidebarProvider >
    <Router>
        <BrandNavbar {...props} />
        <h1> {JSON.stringify(props.isAuthenticated)}</h1>

        <div className='' style={{ "display": "flex" }}>
          <SidePannel {...props} />
          <BaseRouter {...props}></BaseRouter>
        </div>
    </Router>
  </ProSidebarProvider>
  
  </>);
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;