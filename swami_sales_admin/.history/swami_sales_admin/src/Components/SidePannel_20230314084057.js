import React from 'react';
import {Sidebar, Menu, MenuItem,SubMenu,useProSidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import * as actions from '../reducer/actions/auth'
import LoginIcon from '@mui/icons-material/Login';
import { connect } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function SidePannel(props) {

  const navigate = useNavigate();
  function logoutEvent() {
    props.logout()
    navigate("/login")
  }
  const { collapseSidebar } = useProSidebar();

  const bg = '#0c192e'

  return ( <>

    <div className='sidebar'  style={{ display: 'flex', height: '100vh'}}>
        <Sidebar collapseSidebar
        veriant='dark'
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: 'bg',
          },
        }} 
        >
          
          <Menu>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}> Home</MenuItem>
          <SubMenu icon={<PeopleOutlinedIcon />}  label='Users'>
            <MenuItem  icon={<FormatListBulletedIcon />} component={<Link to="/users" /> }> Users List</MenuItem>
            <MenuItem icon={<PersonAddIcon />} component={<Link to="/users" />}> Add User</MenuItem>
          </SubMenu>

          <MenuItem icon={<AddBusinessIcon />} component={<Link to="/wholesales" />}> Wholesales</MenuItem>
          {
            (props.isAuthenticated) ?
              <MenuItem icon={<LogoutIcon />} component={<Link onClick={logoutEvent} />}> Logout</MenuItem> :
              <MenuItem icon={< LoginIcon/>} component={<Link to='/login'/>}>Login</MenuItem> 

          }

            

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