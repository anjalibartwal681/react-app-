import React, { useState, useEffect } from "react";
import leftArrow from "../../src/assets/leftArrow.png";
import rightArrow from "../../src/assets/rightArrow.png";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleclickright = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImage.length);
  };

  const handleclickleft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + arrayImage.length) % arrayImage.length
    );
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImage.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div
      id="test"
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
        src={arrayImage[currentIndex].Link}
        alt={`Slide ${currentIndex}`}
        style={{ width: "700px", height: "350px" }}
      />

      <img
        src={leftArrow}
        alt="Previous Slide"
        onClick={handleclickleft}
        style={{
          width: "40px",
          height: "40px",
          position: "absolute",
          backgroundColor: "#FFF",
          left: "15%",
          borderRadius: 50,
          display: currentIndex === 0 ? "none" : "block",
        }}
      />

      <img
        src={rightArrow}
        alt="Next Slide"
        onClick={handleclickright}
        style={{
          width: "40px",
          height: "40px",
          position: "absolute",
          backgroundColor: "#FFF",
          right: "15%",
          borderRadius: 50,
          display: currentIndex === arrayImage.length - 1 ? "none" : "block",
        }}
      />
    </div>
  );
};

export default ImageCarousel;
