import React from "react";
import Productos from "./Productos";
import ContactoForm from "../components/ContactoForm";
import Carrusel from "../components/Carrusel";
import { Typography } from "@mui/material";


export default function Inicio() {
  

  return (
    <>
      
      <Typography variant="h3" color="primary" textAlign="center" sx={{ margin: "auto" }} >
          PORTAL
       </Typography>

      <Carrusel/>
      <Productos />
      <ContactoForm />
    </>
  );
}
