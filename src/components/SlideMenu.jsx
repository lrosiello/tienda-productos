import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";

const drawerWidth = 200;

export default function SlideMenu(props) {
  const handleLinkClick = () => {
    props.setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", zIndex: 4 }}>
      <Drawer
        variant="persistent"
        open={props.open}
        anchor="right"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Inicio", "Tienda", "Acerca de", "Contacto"].map((text, index) => {
              let to = "/";
              if (index === 1) {
                to = "products";
              } else if (index === 2) {
                to = "about";
              } else if (index === 3) {
                  to = "contact";
              }

              return (
                <Link
                  key={text}
                  to={to}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={handleLinkClick}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} sx={{ textAlign: "center" }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
