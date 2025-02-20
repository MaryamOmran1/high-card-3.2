import React from "react";

const PlayingCard = ({ name, suit }) => (
  <div className="card">
    <h3>{name}</h3>
    <p>{suit}</p>
  </div>
);

export default PlayingCard;