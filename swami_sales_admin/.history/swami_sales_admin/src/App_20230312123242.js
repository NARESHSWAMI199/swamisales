import React, { useEffect, useState }  from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import BrandNavbar from './Components/Navbar';
import SidePannel from './Components/SidePannel';
import { connect } from 'react-redux';
import  * as actions from './reducer/actions/auth'
import Login from './Components/Login';



function App(props) {

  const [authenticat, setAuthenticat] = useState(false)

  useEffect(()=>{
    props.onTryAutoSignup()
    setAuthenticat(props.isAuthenticated)
  },[])

  return (<>
   <ProSidebarProvider>
    <Router>
        <BrandNavbar {...props} />
        <div className='' style={{ "display": "flex" }}>
          <SidePannel {...props} />
          {authenticat ? <BaseRouter {...props}></BaseRouter> : <Login/>
        </div>
    </Router>
  </ProSidebarProvider>
  }
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
