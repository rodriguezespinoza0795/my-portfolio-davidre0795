import React from 'react';

import { IconButton, Box, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'

const MenuButton = ({handleDrawerToggle, pages}) => {
  return (
    <>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Link key={page.projectID} href={page.path}>
          <Button

            sx={{ my: 2, color: 'white', display: 'block' }}
          >
              {page.name}
          </Button>
        </Link>
      ))}
    </Box>
    </>
  )
}

export default MenuButton
