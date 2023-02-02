import "./style/picture-slider.css";
import PictureCard from "./picture-card";
import React, { useEffect, useState } from "react";

/**
 * React Picture Slider Component
 * @param  {Object} picturesData Array of three Objects that contain { {string} heading, {string} place, {string} comment, {string} link to the image}
 */
const PictureSlider = ({ picturesData }) => {
  const [cardOrder, setCardOrder] = useState([
    "card_previous",
    "card_next",
    "card_current",
  ]);
  const [pictureIndex, setPictureIndex] = useState(2);

  useEffect(() => {
    document.querySelector(".card_component").style.opacity = 1;
  }, []);

  const onLeftButtonClick = () => {
    setCardOrder((prevOrder) => {
      return [prevOrder[1], prevOrder[2], prevOrder[0]];
    });

    setPictureIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : 2;
    });
  };
  const onRightButtonClick = () => {
    setCardOrder((prevOrder) => {
      return [prevOrder[2], prevOrder[0], prevOrder[1]];
    });

    setPictureIndex((prevIndex) => {
      return prevIndex < 2 ? prevIndex + 1 : 0;
    });
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${picturesData[pictureIndex].image})`,
      }}
      className="card_component"
    >
      <div className="card_wrapper">
        <PictureCard
          cardData={{ ...picturesData[0], position: cardOrder[0] }}
        />
        <PictureCard
          cardData={{ ...picturesData[1], position: cardOrder[1] }}
        />
        <PictureCard
          cardData={{ ...picturesData[2], position: cardOrder[2] }}
        />
      </div>
      <button
        className="slide_button"
        id="button_left"
        onClick={onLeftButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
      <button
        className="slide_button"
        id="button_right"
        onClick={onRightButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
};

export default PictureSlider;
