/* eslint-disable react/prop-types */
import React from "react";
import Tour from "./Tour";

function Tours({ tours }) {
  const tour = tours.map((tour) => {
   
    return (
      <Tour
        img={tour.image}
        name={tour.name}
        info={tour.info}
        price={tour.price}
        key={tour.id}
      />
    );
  });
  return <>{tour}</>
}

export default Tours;
