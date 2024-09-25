/* eslint-disable react/prop-types */
import React from "react";
export default function Tour(props) {
  console.log(props);
  return (
    <article key={props.id}>
      <img src={props.img} alt={props.name}></img>
      <span className="tour-price">${props.price}</span>
      <div className="tour-info">
        <h4>{props.name}</h4>
        <p>
          {props.info}
          <button className="read-more">read more</button>
        </p>
        <button className="delete-btn">not interested</button>
      </div>
    </article>
  );
}
