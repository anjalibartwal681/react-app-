import React, { useState, useEffect } from "react";

import leftArrow from "../../src/assets/leftArrow.png";
import rightArrow from "../../src/assets/rightArrow.png";

const arrayImage = [
  {
    id: 1,
    Link: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
  },
  {
    id: 2,
    Link: "https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_640.jpg",
  },
  {
    id: 3,
    Link: "https://cdn.pixabay.com/photo/2016/12/06/18/27/cheese-1887233_640.jpg",
  },
  {
    id: 4,
    Link: "https://cdn.pixabay.com/photo/2018/08/22/13/58/grapes-3623694_640.jpg",
  },
];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleclickright = () => {
    setCurrentIndex((currentIndex) => currentIndex + 1);
  };
  const handleclickleft = () => {
    setCurrentIndex((currentIndex) => currentIndex - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: "700px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <img
        src={arrayImage[currentIndex]?.Link}
        style={{ width: "700px", height: "350px" }}
      />

      <img
        src={leftArrow}
        onClick={handleclickleft}
        hidden={currentIndex === 0}
        style={{
          width: "40px",
          position: "absolute",
          backgroundColor: "#FFF",
          left: "15%",
          height: "40px",
          borderRadius: 50,
        }}
      />

      <img
        src={rightArrow}
        onClick={handleclickright}
        hidden={currentIndex === 3}
        style={{
          width: "40px",
          height: "40px",
          position: "absolute",
          backgroundColor: "#FFF",
          right: "15%",
          borderRadius: 50,
        }}
      />
    </div>
  );
};

export default ImageCarousel;
