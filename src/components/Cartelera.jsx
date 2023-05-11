import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Cartelera({ img,title,text }) {
  const fondo = `url(${img})`;

  return (
    <>
    
      <Grid
        item
        md={12}
        xs={12}
        p={5}
       
        mb={5}
        style={{
          backgroundImage: fondo,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative"
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
            backgroundColor: "rgba(0, 0, 0, 0.5)" 
          }}
        >
          <div mt={7} style={{backgroundColor: "rgba(0, 0, 0, 0.4)" , height: "auto",marginTop: 30 }}>
          <Typography variant="h4" color="text.secondary" textAlign="center"  >
            {title}
          </Typography>
          <div style={{ maxHeight: "185px", overflow: "auto", marginTop: 40 }}>
              <Typography variant="h6" color="text.secondary" textAlign="center">
                {text}
              </Typography>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}