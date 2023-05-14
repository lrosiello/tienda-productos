import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Productos from "./pages/Productos";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Inicio from "./pages/Inicio";
import Footer from "./components/Footer";
import { Container, Fab, Grid } from "@mui/material";

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

          {/*------------------RUTAS-------------------------*/}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/products" element={<Productos />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/*------------------BOTON WHATSSAP-------------------------*/}
          <div style={{ position: "fixed", bottom: 80, right: 80, zIndex:5 }}>
            <Fab color="success" aria-label="add">
              <WhatsAppIcon sx={{fontSize:"3rem" }}/>
            </Fab>
          </div>

          {/*------------------FOOTER-------------------------*/}
          <Footer />
        </Router>
      </Grid>
    </div>
  );
}

export default App;