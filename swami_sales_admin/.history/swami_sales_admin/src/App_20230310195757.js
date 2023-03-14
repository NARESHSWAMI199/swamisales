import React, {Component }  from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import BrandNavbar from './Components/Navbar';
import SidePannel from './Components/SidePannel';
import * as actions from './reducer/actions/auth'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (<>
      <BrandNavbar />
    <ProSidebarProvider>
      <Router>
          <div className='' style={{ "display": "flex" }}>
            <SidePannel />
          <BaseRouter/>
          </div>
      </Router>
    </ProSidebarProvider>
    </>);
  }
}
const mapStateToProps = state => {
  console.log('herereee')
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


