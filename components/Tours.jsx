/* eslint-disable react/prop-types */
import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  const tour = tours.map((tour) => {
    return (
      <Tour
        id={tour.id}
        img={tour.image}
        name={tour.name}
        info={tour.info}
        price={tour.price}
        key={tour.id}
        removeTour={removeTour}
      />
    );
  });

  return <section>{tour}</section>;
}

export default Tours;
