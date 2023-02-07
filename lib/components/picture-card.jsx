import React from "react";

const PictureCard = ({ cardData }) => {
  return (
    <div
      className={`card ${cardData.position}`}
      style={{ backgroundImage: `url(${cardData.image})` }}
    >
      <p className="card_header">{cardData.heading}</p>
      <p className="card_place">{cardData.place}</p>
      <p className="card_comment">{cardData.comment}</p>
    </div>
  );
};

export default PictureCard;
