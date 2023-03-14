import React from 'react';
import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as actions from '../reducer/actions/auth'
import LoginIcon from '@mui/icons-material/Login';
import { connect } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


function SidePannel(props) {
  const { collapseSidebar } = useProSidebar();

  const bg = '#0c192e'

  const navigate = useNavigate();
  function logoutEvent() {
    props.logout()
    navigate("/login")
  }


  return ( <>

    <div className='sidebar'  style={{ display: 'flex', height: '100vh', color:"white" }}>
        <Sidebar collapseSidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: bg,
          },
        }} 
        >
          
          <Menu>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}> Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />} component={<Link to="/users" /> }> Users</MenuItem>
          <MenuItem icon={<AddBusinessIcon />} component={<Link to="/wholesales" />}> Wholesales</MenuItem>
          {
            (props.isAuthenticated) ?
              <MenuItem icon={<LogoutIcon />} component={<Link onClick={logoutEvent} />}> Logout</MenuItem> :
              <MenuItem icon={< LoginIcon/>} component={<Link to='/login'/>}>Login</MenuItem> 

          }
{/* 
          <SubMenu icon={<ArrowDropDownIcon/>} label='Others'>
        
        </SubMenu> */}

          </Menu>
        </Sidebar>
        <main>
        <button className='btn btn-white border' onClick={() => collapseSidebar()}>{<ViewSidebarIcon/>}</button>
        </main>
      </div>

      


  </>)
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(SidePannel)