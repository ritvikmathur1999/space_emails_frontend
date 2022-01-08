import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div className="appBar">
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div">
            Space Emails
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
