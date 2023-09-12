import React, { useState } from 'react';
import styles from './MenuBar.module.css';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Products', link: '/products' },
  { label: 'Pricing', link: '/pricing' },
  { label: 'Blog', link: '/blog' },
];

const settings = [
  { label: 'Profile', link: '/profile' },
  { label: 'Account', link: '/account' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Logout', link: '/logout' },
];

const userName = 'Aria';

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [lastClickedLabel, setLastClickedLabel] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (label) => {
    setLastClickedLabel(label);
    handleCloseNavMenu();
    handleCloseUserMenu();
  };

  return (
    <div>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box className={styles.boxContainer}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                className={styles.menuContainer}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={() => handleMenuItemClick(page.label)}>
                    <Link to={page.link} className={styles.link}>
                      <Typography>{page.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box className={styles.navBox}>
              {pages.map((page) => (
                <Link key={page.label} to={page.link} className={styles.link}>
                  <Button onClick={() => handleMenuItemClick(page.label)} className={styles.menuButton}>
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box className={styles.userContainer}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} className={styles.iconButton}>
                  <Avatar>{userName[0].toUpperCase()}</Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                className={styles.menu}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.label} onClick={() => handleMenuItemClick(setting.label)}>
                    <Link to={setting.link} className={styles.link}>
                      <Typography>{setting.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {lastClickedLabel && (
        <p className={styles.message}>This is the {lastClickedLabel} page</p>
      )}
    </div>
  );
};

export default MenuBar;
