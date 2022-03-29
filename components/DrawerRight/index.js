import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Linker } from "../Linker";

export default function DrawerRight() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        bgcolor: "black",
        height: "100%",
        color: "white",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Linker target={"/"}>
          <ListItem button key={"home"}>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Linker>
        <Linker target={"/magic10"}>
          <ListItem button key={"themagic10"}>
            <ListItemText primary={"The Magic 10"} />
          </ListItem>
        </Linker>
        <Linker target={"/shop"}>
          <ListItem button key={"shop"}>
            <ListItemText primary={"Shop"} />
          </ListItem>
        </Linker>
        <Linker target={"/about"}>
          <ListItem button key={"about"}>
            <ListItemText primary={"About Me"} />
          </ListItem>
        </Linker>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            style={{ color: "#FFBC59" }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
            sx={{ mr: 2, display: { md: "none", sm: "block" } }}
          >
            <MenuIcon sx={{ display: { md: "none", sm: "block" } }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
