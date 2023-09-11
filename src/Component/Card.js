import React from "react";
import "../Component/CardStyle.css";


const Card = ({ data }) => {


  return (
   
    
    <div className="card">
      <div className="stories_image">
        <img src={data["imageUrl"]} alt={data.title} />
      </div>

      <div className="cardBody">
        <h3>{data.title}</h3>

        <div className="publishingData">
          <p className="author"> {data.author} </p>
          <p> | </p>
          <p> {data.date} </p>
        </div>

        <p className="desc">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
