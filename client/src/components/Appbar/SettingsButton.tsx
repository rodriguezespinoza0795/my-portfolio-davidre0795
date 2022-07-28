import React from "react";

import {
  IconButton,
  Typography,
  Box,
  Menu,
  Tooltip,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

type SettingButtonProps = {
  handleOpenUserMenu: any;
  anchorElUser: any;
  handleCloseUserMenu: any;
  settings: string[];
};

const SettingButton = ({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  settings,
}: SettingButtonProps) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AccountCircle />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting: string) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SettingButton;
