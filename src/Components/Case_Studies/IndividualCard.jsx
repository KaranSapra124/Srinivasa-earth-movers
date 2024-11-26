import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useLocation } from "react-router-dom";

// IndividualCard component that takes project data as props
const IndividualCard = () => {
  const location = useLocation();
  const { state } = location;
  const { title, description, thumbnail, images } = state;
  const [mainImage, setMainImage] = useState(thumbnail);
  return (
    // <ScrollAnimation animateIn="bounce">
    <div className="border m-auto border-gray-300 rounded-lg p-2 m-4 mb-8 max-w-screen-lg shadow-md">
      <div className="flex justify-between max-[600px]:flex-wrap">
        <div className="ml-2 ">
          <div className="text-center mb-4">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-52 object-fit rounded-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            {images.map((imgSrc, index) => (
              <img
                onClick={() => setMainImage(imgSrc)}
                key={index}
                src={imgSrc}
                alt={`Project Image ${index + 1}`}
                className="w-24 h-24 max-[600px]:w-20 max-[600px]:h-20 object-cover rounded-md"
              />
            ))}
            <img
              onClick={() => setMainImage(thumbnail)}
              // key={index}
              src={thumbnail}
              alt={title}
              className="w-24 h-24 max-[600px]:w-20 max-[600px]:h-20 object-cover rounded-md"
            />
          </div>
        </div>
        <div className="ml-4">
          <h1 className="text-2xl mb-2 text-center font-bold">{title}</h1>
          <div
            className="mb-4 max-h-[20rem] overflow-y-scroll max-w-[30rem]"
            dangerouslySetInnerHTML={{ __html: description }} // Render HTML safely
          />
        </div>
      </div>
    </div>
    // </ScrollAnimation>
  );
};

export default IndividualCard;
