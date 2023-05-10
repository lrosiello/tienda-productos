import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Productos from "./pages/Productos";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Container, Fab, Grid, Typography } from "@mui/material";

import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
          <Grid item md={12} xs={12}>
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
            <Route path="/" element={<Productos />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/*------------------BOTON WHATSSAP-------------------------*/}
          <Grid item md={12} xs={12} sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 5, marginRight:15 }}>
            <Fab color="secondary" aria-label="add">
              <WhatsAppIcon />
            </Fab>
          </Grid>

          {/*------------------FOOTER-------------------------*/}
          <Footer />
        </Router>
      </Grid>
    </div>
  );
}

export default App;
