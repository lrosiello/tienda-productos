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
        image: imagen,
      });
    }
    return productos;
  };

  return (
    <Grid container padding={2} spacing={2}>
      {arrayProductos().map((producto, index) => (
        <Grid item key={index} md={3} xs={12} spacing={2} >
          <Box height="100%">
            <Paper elevation={6} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <Box flexGrow={1} textAlign="center">
                <img src={producto.image} alt={producto.title} style={{ width: "100%", height: "auto" }} />
              </Box>
              <Box p={2} flexGrow={0}>
                <h3>{producto.title}</h3>
                <p style={{ maxHeight: "150px", overflowY: "auto" }}>{producto.description}</p>
              </Box>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
