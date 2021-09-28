import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { CssBaseline } from "@mui/material";

export default function Navbar() {
  return (
    <CssBaseline>
      <AppBar display="flex" position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Crypto Watcher
          </Typography>
          <Button variant="outlined" sx={{ background: "white" }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
}
