import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Diversity3Icon from '@mui/icons-material/Diversity3';
const Navbar = () => {
  const [featuresMenuAnchor, setFeaturesMenuAnchor] = useState(null);
  const [solutionsMenuAnchor, setSolutionsMenuAnchor] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleFeaturesMenuOpen = (event) => {
    setFeaturesMenuAnchor(event.currentTarget);
  };

  const handleFeaturesMenuClose = () => {
    setFeaturesMenuAnchor(null);
  };

  const handleSolutionsMenuOpen = (event) => {
    setSolutionsMenuAnchor(event.currentTarget);
  };

  const handleSolutionsMenuClose = () => {
    setSolutionsMenuAnchor(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1A5276  " }}>
      <Container>
        <Toolbar>
          {/* Menu Icon for Small Screens */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ marginRight: '2px', '@media (min-width: 600px)': { display: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 , color: 'white'}}>
           <Diversity3Icon/>
          </Typography>
          <Typography variant="h6"  sx={{ flexGrow: 1 , color: 'white'}}>
         
          </Typography>
          
           
            <Button component={Link} to="/home" color="inherit">
             Home
            </Button>
          {/* Navigation Links for Larger Screens */}
          <div sx={{ '@media (max-width: 600px)': { display: 'none' } }}>
          <Button
              color="inherit"
              onClick={handleFeaturesMenuOpen}
              sx={{ marginRight: '10px' }}
            >
              Features
            </Button>
            <Button
              color="inherit"
              onClick={handleSolutionsMenuOpen}
              sx={{ marginRight: '10px' }}
            >
              Solutions
            </Button>
            <Button component={Link} to="/technologies" color="inherit">
             Technologies
            </Button>
           
            <Button component={Link} to="/service" color="inherit">
             Service
            </Button>
           
            <Button component={Link} to="/pricing" color="inherit">
              Pricing
            </Button>
            <Button component={Link} to="/Contactus" color="inherit">
              Contact Us
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/register" color="inherit">
             Register
            </Button>
          </div>

          {/* Drawer for Small Screens */}
          <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItemButton component={Link} to="/Contact" onClick={handleDrawerClose}>
                <ListItemText primary="CONTACTUS" />
              </ListItemButton>
              <ListItemButton component={Link} to="/technologies" onClick={handleDrawerClose}>
                <ListItemText primary="Technologies" />
              </ListItemButton>
              <ListItemButton component={Link} to="/service" onClick={handleDrawerClose}>
                <ListItemText primary="Service" />
              </ListItemButton>
              <ListItemButton onClick={handleFeaturesMenuOpen}>
                <ListItemText primary="Features" />
              </ListItemButton>
              <ListItemButton onClick={handleSolutionsMenuOpen}>
                <ListItemText primary="Solutions" />
              </ListItemButton>
              <ListItemButton component={Link} to="/login" onClick={handleDrawerClose}>
                <ListItemText primary="Login" />
              </ListItemButton>
              <ListItemButton component={Link} to="/register" onClick={handleDrawerClose}>
                <ListItemText primary="Registerform" />
              </ListItemButton>
            </List>
          </Drawer>

          {/* Features Dropdown */}
          <Menu
            anchorEl={featuresMenuAnchor}
            open={Boolean(featuresMenuAnchor)}
            onClose={handleFeaturesMenuClose}
          >
            <MenuItem component={Link} to="/feature/project-management" onClick={handleFeaturesMenuClose}>
            Vendor onboarding
            </MenuItem>
            <MenuItem component={Link} to="/feature/goals-and-reporting" onClick={handleFeaturesMenuClose}>
            Data analysis
            </MenuItem>
            <MenuItem component={Link} to="/feature/workflows-and-automation" onClick={handleFeaturesMenuClose}>
            Employee engagement
            </MenuItem>
            <MenuItem component={Link} to="/feature/resource-management" onClick={handleFeaturesMenuClose}>
            Strategy and aid
            </MenuItem>
            <MenuItem component={Link} to="/feature/admin-and-security" onClick={handleFeaturesMenuClose}>
            Software integrations
            </MenuItem>
            <MenuItem component={Link} to="/feature/admin-and-security" onClick={handleFeaturesMenuClose}>
            Risk assessment and compliance
            </MenuItem>
            <MenuItem component={Link} to="/feature/admin-and-security" onClick={handleFeaturesMenuClose}>
            Payment automation
            </MenuItem>
          </Menu>

          {/* Solutions Dropdown */}
          <Menu
            anchorEl={solutionsMenuAnchor}
            open={Boolean(solutionsMenuAnchor)}
            onClose={handleSolutionsMenuClose}
          >
            <MenuItem component={Link} to="/solution/task-management" onClick={handleSolutionsMenuClose}>
              Technologies
            </MenuItem>
            <MenuItem component={Link} to="/solution/strategic-planning" onClick={handleSolutionsMenuClose}>
             Retail
            </MenuItem>
            <MenuItem component={Link} to="/solution/creative-production" onClick={handleSolutionsMenuClose}>
            Financial Service
            </MenuItem>
          
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;