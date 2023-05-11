import React, { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel';
import CarouselItem from "./CarouselItem";
import primerCartelera from "../assets/cartelera1.jpg";
import segundaCartelera from "../assets/cartelera2.jpg";
import tercerCartelera from "../assets/cartelera3.jpg";


export default function Carrusel() {
  const sliders = [
    {
      id: 0,
      img: primerCartelera,
      title:"TODO LO QUE DESEAS LO ENCONTRAS ACA",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odio ea consectetur perspiciatis magnam, dolores tenetur aut, adipisci aspernatur eaque quisquam architecto nulla officia voluptate a labore illo reprehenderit corrupti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odio ea consectetur perspiciatis magnam, dolores tenetur aut, adipisci aspernatur eaque quisquam architecto nulla officia voluptate a labore illo reprehenderit corrupti."
    },
    {
      id: 1,
      img: segundaCartelera,
      title:"NUEVAS ESTRATEGIAS PARA TERAPIAS GRUPALES",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odio ea consectetur perspiciatis magnam, dolores tenetur aut, adipisci aspernatur eaque quisquam architecto nulla officia voluptate a labore illo reprehenderit corrupti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odio ea consectetur perspiciatis magnam, dolores tenetur aut, adipisci aspernatur eaque quisquam architecto nulla officia voluptate a labore illo reprehenderit corrupti."
    },
    {
      id: 2,
      img: tercerCartelera,
      title:"NUEVOS TALLERES PARA ESTE MES",
      text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odio ea consectetur perspiciatis magnam, dolores tenetur aut, adipisci aspernatur eaque quisquam architecto nulla officia voluptate a labore illo reprehenderit corrupti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem odio ea consectetur perspiciatis magnam, dolores tenetur aut, adipisci aspernatur eaque quisquam architecto nulla officia voluptate a labore illo reprehenderit corrupti."
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % sliders.length;
      setCurrentIndex(nextIndex);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, sliders.length]);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Carousel
       animation="slide"
       index={currentIndex}
       onChange={(index) => setCurrentIndex(index)}
       navButtonsAlwaysVisible={false}
       swipe={false}
       autoPlay={false}
      >
        {sliders.map((item) => (
          <CarouselItem key={item.id} img={item.img} title={item.title} text={item.text} />
        ))}
      </Carousel>
    </div>
  );
}