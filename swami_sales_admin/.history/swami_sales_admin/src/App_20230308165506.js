import React  from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import BrandNavbar from './Components/Navbar';
import Dashborad from './Components/Dashborad';


function App() {
  return (<>
    <BrandNavbar />
   <ProSidebarProvider>
    <Dashborad />
    {/* <Router>
        <BaseRouter></BaseRouter>
    </Router> */}
  </ProSidebarProvider>
  </>);
}

export default App;
