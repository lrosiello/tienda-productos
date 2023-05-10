import React from "react";
import { Grid, Typography } from "@mui/material";
import Productos from "./Productos";
import ContactoForm from "../components/ContactoForm";
import backgroundImage from "../assets/cartelera.jpg"

export default function Inicio() {
  return (
    <>
      {/*------------------CARTELERA-------------------------*/}
      <Grid
        item
        md={12}
        xs={12}
        p={5}
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography variant="h5" color="initial" textAlign="center" style={{ color: "#fff" }}>
          TODO LO QUE NECESITAS, LO PODES ENCONTRAR ACA
        </Typography>
      </Grid>
      <Productos />
      <ContactoForm />
    </>
  );
}