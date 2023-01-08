import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  siteName: string;
}

export default function DrawerAppBar(props: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" style={{ backgroundColor: "#1A1F16" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {props.siteName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
