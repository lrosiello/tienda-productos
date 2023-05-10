import React from "react";
import { Grid,Typography } from "@mui/material";
import Productos from "./Productos"
import ContactoForm from "../components/ContactoForm"

export default function Inicio() {
  return (
    <>
      {/*------------------CARTELERA-------------------------*/}
      <Grid item md={12} xs={12} p={5}>
            <Typography variant="h5" color="initial" textAlign="center">
              TODO LO QUE NECESITAS, LO PODES ENCONTRAR ACA
            </Typography>
          </Grid>
      <Productos/>
      <ContactoForm/>
    </>
  );
}