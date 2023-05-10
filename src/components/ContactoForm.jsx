import React from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";

export default function ContactoForm() {
  return (
    <Grid
      item
      mb={5}
      md={12}
      xs={12}
      p={5}
      style={{ background: "background", marginTop: "auto" }}
    >
      <Grid container justifyContent="center">
        <Grid item md={12} xs={12}>
          <Typography variant="body1" color="primary" align="center">
            CONTACTO
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={6}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          
        >
          <Grid item md={6} xs={12}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Nombre"
                multiline
                maxRows={4}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Asunto"
                multiline
                maxRows={4}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-static"
                label="Mensaje"
                multiline
                rows={4}
              />
              <Button variant="contained" color="success" sx={{ width: '100%',ml:1,mb:1.5,mt:3.5}}>
                Enviar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
