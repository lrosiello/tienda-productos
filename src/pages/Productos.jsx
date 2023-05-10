import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import imagen from "../assets/image.jpg";

export default function Productos() {


  const arrayProductos = () => {
    const productos = [];
    for (let index = 0; index < 12; index++) {
      productos.push({
        title: "Producto " + (index + 1),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odio ea consectetur perspiciatis magnam, dolores tenetur aut, adipisci aspernatur eaque quisquam architecto nulla officia voluptate a labore illo reprehenderit corrupti.",
        image:imagen
          
      });
    }
    return productos;
  };

  return (
    <>
      {arrayProductos().map((producto, index) => (
        <Grid item key={index} md={3} xs={12} p={5}>
          <Box height={500} maxWidth={400}>
            <Paper elevation={6} sx={{ height: "100%", padding: "16px"  }}>
              <img src={producto.image} alt={producto.title} style={{ width: "100%", height: "auto" }} />
              <h3>{producto.title}</h3>
              <p>{producto.description}</p>
            </Paper>
          </Box>
        </Grid>
      ))}
    </>
  );
}