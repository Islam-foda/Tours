/* eslint-disable react/prop-types */
import React from "react";
export default function Tour(props) {
    const {id,img,price,name,info,removeTour} = props
  const [readMore, setReadMore] = React.useState(false);

  function showHide() {
    setReadMore(!readMore);
  }
  return (
    <article key={id}>
      <img src={img} alt={name}></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : info.substring(0, 200) + "..."}
          <button onClick={showHide} className="read-more">
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button onClick={()=>removeTour(id)} className="delete-btn">not interested</button>
      </div>
    </article>
  );
}
