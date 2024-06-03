import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Navbar2 from '../navbar2/Navbar2';

const Sidebarcom = () => {
  return (
    <div >
    <Navbar2></Navbar2>
      <Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>;
    </div>
  )
}

export default Sidebarcom
