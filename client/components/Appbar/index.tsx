import React, {useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container'
import MenuButton from './MenuButton'
import SettingButton from './SettingsButton'
import Logo from './Logo'
import DrawerComponent from '../Drawer'

const navItems = [{ "projectID":1, "name":"bBox", "path":"/projects/bBox"}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type LayoutProps = {
  children?: React.ReactNode
}
function DrawerAppBar({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<any>(null);

  const handleOpenUserMenu = (event: React.FormEvent<HTMLInputElement>) : void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo variant="h6" displayXS="none" displayMD="flex" flexGrow={0}/>
          <MenuButton
            pages={navItems}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Logo variant="h5" displayXS="flex" displayMD="none" flexGrow={1}/>
          <SettingButton
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            settings={settings}
          />
        </Toolbar>
      </Container>
      </AppBar>
      <DrawerComponent
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
      />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
