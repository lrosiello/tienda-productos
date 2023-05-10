import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Productos from "./pages/Productos";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Container, Grid, Typography } from "@mui/material";

import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item md={12} xs={12}>
          {/*------------------CABECERA CON ICONOS-------------------------*/}
          <Container
            sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Container>
        </Grid>

        {/*------------------BARRA DE NAVEGACION-------------------------*/}
        <Router>
          <Grid item md={12} xs={12} mb={5}>
            <NavBar />
          </Grid>
          {/*------------------CARTELERA-------------------------*/}
          <Grid item md={12} xs={12} p={5}>
            <Typography variant="h5" color="initial" textAlign="center">
              TODO LO QUE NECESITAS, LO PODES ENCONTRAR ACA
            </Typography>
          </Grid>

          {/*------------------RUTAS-------------------------*/}
          <Routes>
            <Route path="/" element={<Productos />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>

        <Footer />
      </Grid>
    </div>
  );
}

export default App;
