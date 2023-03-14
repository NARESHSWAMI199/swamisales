import React from 'react';
import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';


function SidePannel() {
  const { collapseSidebar } = useProSidebar();

  const bg = '#0c192e'

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
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/documentation" />}> Documentation</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon/>}> Users</MenuItem>
          <MenuItem icon={<AddBusinessIcon/>}> Wholesales</MenuItem>


        <SubMenu label='Dropdown'>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> Wholesale</MenuItem>
        </SubMenu>

          </Menu>
        </Sidebar>
        <main>
        <button className='btn btn-white border' onClick={() => collapseSidebar()}>{<ViewSidebarIcon/>}</button>
        </main>
      </div>


  </>)
}


export default SidePannel