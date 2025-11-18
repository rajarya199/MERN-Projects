import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
      const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(-1);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === 0) navigate('/add-user');
    else if (newValue === 1) navigate('/all-users');
    else if (newValue === 2) navigate('/login');
  };
  const handleTitleClick = () => {
    navigate('/');
    setSelectedTab(false); // or set to -1 or null to indicate no tab selected
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
                  onClick={handleTitleClick}
                    style={{ cursor: 'pointer' }}

        >
          My Site
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="navigation tabs"
        >
          <Tab label="Add User" />
          <Tab label="All Users" />
          <Tab label="Login" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
