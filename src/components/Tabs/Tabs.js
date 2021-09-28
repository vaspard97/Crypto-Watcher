import * as React from "react";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ControllerTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box position={"sticky"} top={"0"} bgcolor={"#eeeeee"} zIndex={9998}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
        >
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Watchlist" component={Link} to="/watchlist" />
          <Tab label="Portfolio" component={Link} to="/portfolio" />
        </Tabs>
      </Box>
    </>
  );
}
