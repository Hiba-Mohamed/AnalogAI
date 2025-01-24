import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import logo from "../assets/logo.png"; // Adjust the path if necessary

const Header: React.FC = () => (
  <AppBar
    position="static"
    sx={{
      background: "linear-gradient(90deg, #FFFBFF, #FBFFFF)",
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logo}
        alt="AnalogAI Logo"
        sx={{ height: "50px", paddingX:{sm:"12px"} }}
      />
      <Box sx={{display:"flex", padding:"4px",flexDirection:{xs:"column"}, alignContent:"start", alignSelf:"start", justifyContent:"start", justifyItems:"start"}}>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "start",
            flexGrow: 1,
          }}
        >
          <span style={{ color: "#8E2DB1" }}>Analog</span>
          <span style={{ color: "#4EAB7C" }}>AI</span>
        </Typography>
        <Typography sx={{ color: "black", fontSize:{xs:"10px"} }}>
          Complex Made Simple Through AI Generated Analogies
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
