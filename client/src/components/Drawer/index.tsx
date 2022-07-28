import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const drawerWidth = 240;

type SettingButtonProps = {
  mobileOpen: any;
  handleDrawerToggle: any;
  navItems: {
    projectID: number;
    name: string;
    path: string;
  }[];
};

const DrawerComponent = ({
  mobileOpen,
  handleDrawerToggle,
  navItems,
}: SettingButtonProps) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DRE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.projectID} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.path}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
