import React, { useState } from "react";
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
    setCurrentIndex((prev) => (prev + 1) % arrayImage.length);
  };
  const handleclickleft = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + arrayImage.length) % arrayImage.length
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img
          src={arrayImage[currentIndex].Link}
          style={{ width: "300px", height: "300px" }}
        />
        <div>
          <button onClick={handleclickleft} style={{ position: "absolute" }}>
            left
          </button>
          <button onClick={handleclickright}>right</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
