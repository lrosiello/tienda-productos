import React from "react";
import { Grid,Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Grid
        item
        md={12}
        xs={12}
        p={5}
        style={{ background: "background", marginTop: "auto" }}
      >
        <Typography variant="body2" color="initial" align="center">
          ACERCA DE NOSOTROS...
        </Typography>
      </Grid>
    </>
  );
}
