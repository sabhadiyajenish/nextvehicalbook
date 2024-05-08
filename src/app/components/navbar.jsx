"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Divider from "@mui/material/Divider";
import Link from "next/link";
const drawerWidth = 240;
// const navItems = ["Car rentel", "Location", "Car types", "About", "Contact"];
const navItems = [
  {
    title: "Car rentel",
    path: "/",
  },
  {
    title: "Location",
    path: "/cardDetails",
  },
  {
    title: "About",
    path: "/carBookingSuccess",
  },
  {
    title: "Car types",
    path: "/cardDetails",
  },
  {
    title: "Contact",
    path: "/carBookingSuccess",
  },
  {
    title: "DashBoard",
    path: "/dashboard",
  },
];
const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.path}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <div className="container mx-auto px-4 ">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component="nav" className="bg-midnight">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <GiHamburgerMenu />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link href="/">MUI</Link>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item, key) => (
                  <Link href={item.path} key={key}>
                    <Button key={key} sx={{ color: "#fff" }} className="mx-3">
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </div>
    </>
  );
};

export default Navbar;
