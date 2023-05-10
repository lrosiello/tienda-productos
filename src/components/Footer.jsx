import React from "react";
import { Grid,Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Grid
        item
        md={12}
        xs={12}
        p={5}
        style={{ background: "#f5f5f5", marginTop: "auto" }}
      >
        <Typography variant="body2" color="textSecondary" align="center">
          FOOTER
        </Typography>
      </Grid>
    </>
  );
}
