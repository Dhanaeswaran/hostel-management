import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background:"#050816",}} width="100vw">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Hostel Management
            </Typography>
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : " " };
              }}
              sx={{ color: "white" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/Contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : " " };
              }}
              sx={{ color: "white" }}
            >
              Contact
            </Button>
            <Button
              component={NavLink}
              to="/announcements"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : " " };
              }}
              sx={{ color: "white" }}
            >
              Announcements
            </Button>
            <Button
              component={NavLink}
              to="/login"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : " " };
              }}
              sx={{ color: "red" }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;