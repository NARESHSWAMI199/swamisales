import React  from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import BrandNavbar from './Components/Navbar';
import SidePannel from './Components/SidePannel';


function App() {
  return (<>
    <BrandNavbar />
   <ProSidebarProvider>
    <Router>
        <div className='' style={{ "display": "flex" }}>
          <SidePannel />
        <BaseRouter></BaseRouter>
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


