import React from "react";
import { Paper } from '@mui/material';
import Cartelera from "./Cartelera";

export default function CarouselItem({ img, title, text }) {
  return (
    <Paper elevation={6} sx={{marginRight:1,marginLeft:1}}>
      <Cartelera img={img} title={title} text={text}/>
    </Paper>
  );
}