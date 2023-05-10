import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SlideMenu from "./SlideMenu";

import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/*------------------ACA VA EL LOGO O TITULO DE LA TIENDA-------------------------*/}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: {
                xl: 0.65, // Valor para breakpoints xs
                lg: 1, // Valor para breakpoints sm
                md: 1, // Valor para breakpoints md
              },
            }}
          >
            Tienda
          </Typography>
          {/*------------------LINKS DE NAVEGACION-------------------------*/}
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", md: "block", lg: "block" } }}
            >
              INICIO
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", md: "block", lg: "block" } }}
            >
              TIENDA
            </Button>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              color="inherit"
              sx={{ display: { xs: "none", md: "block", lg: "block" } }}
            >
              ACERCA DE
            </Button>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              color="inherit"
              sx={{ display: { xs: "none", md: "block", lg: "block" } }}
            >
              CONTACTO
            </Button>
          </Link>

          {/*------------------DRAWER-------------------------*/}
          <SlideMenu open={open} setOpen={setOpen} />

          {/*------------------DRAWER-------------------------*/}

          {/*------------------BOX QUE CONTIENE BOTON MENU Y BUSCADOR-------------------------*/}
          <Box
            sx={{
              zIndex: 5,
              marginLeft: "auto",
              position: "relative",
            }}
          >
            {/*------------------BOTON DE MENU-------------------------*/}
            <IconButton
              color="gray"
              size="large"
              onClick={handleMenuToggle}
              sx={{ display: { xs: "block", md: "none", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/*------------------BUSCADOR-------------------------*/}
            <Box
              sx={{
                backgroundColor: "white",
                alignItems: "flex-end",
                borderRadius: 2,
                marginLeft: "auto",
                display: { xs: "none", md: "flex", lg: "flex" },
              }}
            >
              <SearchIcon sx={{ ml: 2, color: "primary.main", mr: 1, my: 2 }} />
              <TextField
                id="input-with-sx"
                label="buscar"
                sx={{ mr: 0.5, my: 0.5 }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
