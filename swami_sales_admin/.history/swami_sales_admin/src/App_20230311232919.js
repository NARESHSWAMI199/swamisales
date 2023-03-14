import React, { useEffect, useState }  from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import BrandNavbar from './Components/Navbar';
import SidePannel from './Components/SidePannel';
import { connect } from 'react-redux';
import  * as actions from './reducer/actions/auth'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function App(props) {

  const [obj ,setObj] = useState({})
  useEffect(()=>{
    props.onTryAutoSignup()
  },[])

  return (<>
    <BrandNavbar {...props} />
   <ProSidebarProvider>
    <Router>
        <div className='' style={{ "display": "flex" }}>
          <SidePannel {...props} />
        <BaseRouter></BaseRouter>
        </div>
    </Router>
  </ProSidebarProvider>
  </>);
}

const mapStateToProps = state => {
  console.log(state)
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