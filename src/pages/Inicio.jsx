import React from "react";
import { Grid, Typography } from "@mui/material";
import Productos from "./Productos";
import ContactoForm from "../components/ContactoForm";
import backgroundImage from "../assets/cartelera.jpg";

export default function Inicio() {
  const fondo = `url(${backgroundImage})`;

  return (
    <>
      {/*------------------CARTELERA-------------------------*/}
      <Grid
        item
        md={12}
        xs={12}
        p={5}
        mt={5}
        mb={5}
        style={{
          backgroundImage: fondo,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Color de fondo translúcido
          }}
        >
          <Typography variant="h4" color="text.secondary" textAlign="center" mt={7}>
            TODO LO QUE DESEAS ENCONTRAR, ESTÁ AQUÍ
          </Typography>
        </div>
      </Grid>
      <Productos />
      <ContactoForm />
    </>
  );
}
