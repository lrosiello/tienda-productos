import React from "react";
import { Grid } from "@mui/material";
import ContactoForm from "../components/ContactoForm";
export default function Productos() {
  return (
    <>
      <Grid item md={4} xs={12} p={5}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        nesciunt numquam doloribus perspiciatis fugit ut, ipsa error accusantium
        repellat tempora. Tempore quis nulla asperiores esse iste distinctio
        doloremque commodi dolorem.
      </Grid>
      <Grid item md={4} xs={12} p={5}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        nesciunt numquam doloribus perspiciatis fugit ut, ipsa error accusantium
        repellat tempora. Tempore quis nulla asperiores esse iste distinctio
        doloremque commodi dolorem.
      </Grid>
      <Grid item md={4} xs={12} p={5}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        nesciunt numquam doloribus perspiciatis fugit ut, ipsa error accusantium
        repellat tempora. Tempore quis nulla asperiores esse iste distinctio
        doloremque commodi dolorem.
      </Grid>

      <ContactoForm/>
    </>
  );
}
