import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [index, setIndex] = useState(0);
  const Navigate = useNavigate();
  const data = [
    {
      id: 1,
      img: "image012.jpg",
      title: "Soil excavation",
      link: "soilExcavation",
      description:
        "Soil excavation involves removing earth materials to prepare a site for construction, landscaping, or infrastructure projects. It typically requires digging, shifting, or hauling soil to make space for foundations, utilities, or landscaping features.",
    },
    {
      id: 2,
      img: "image014.png",
      title: "Rock excavation",
      link: "rockExcavation",
      description:
        "Rock excavation specializes in breaking and removing rock formations to create space for foundations or structures. Advanced techniques are used to minimize disruption and ensure precision during excavation.",
    },
    {
      id: 3,
      img: "image016.jpg",
      title: "Layout site development Works",
      link: "layoutSite",
      description:
        "Layout site development works involve preparing land by leveling, grading, and laying the groundwork for construction projects. This step ensures proper site preparation for a stable and successful build.",
    },
    {
      id: 4,
      img: "image018.jpg",
      title: "Tunnel face cutting",
      link: "tunnelFace",
      description:
        "Tunnel face cutting is the process of cutting through rock and soil to create tunnels. It ensures safe excavation by using controlled methods that reduce risks and maintain project schedules.",
    },
    {
      id: 5,
      img: "https://kasturiearthmovers.com/wp-content/uploads/2023/07/1-st-image.jpg",
      title: "Road excavation",
      link: "roadExcavation",
      description:
        "Road excavation involves clearing and grading land to build roadways that meet design specifications. This ensures the creation of smooth, stable surfaces for long-lasting infrastructure.",
    },
    {
      id: 6,
      img: "image020.png",
      title: "Quarries operation",
      link: "quarries",
      description:
        "Quarry operations involve the extraction of materials like stone, gravel, and minerals from quarries. The process maximizes efficiency and minimizes environmental impact, ensuring sustainable resource management.",
    },
    {
      id: 7,
      img: "image022.jpg",
      title: "Pipeline trenches",
      link: "pipeline",
      description:
        "Pipeline trenching is the excavation of precise trenches for the installation of pipelines. This process ensures correct depth, alignment, and safety, prioritizing efficiency in all trenching projects.",
    },
    {
      id: 8,
      img: "image024.jpg",
      title: "Controlled rock blasting",
      link: "controlled",
      description:
        "Controlled rock blasting is a method used to break rock using explosives while minimizing impact on the surrounding environment. Precision and safety are prioritized to ensure successful project outcomes.",
    },
  ];

  // Create a ref to the container
  const containerRef = useRef(null);

  // Function to handle the hover event on the last item
  const handleHoverLastItem = (i) => {
    console.log(i);
    setIndex(i);
  };
  const handleClick = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  useEffect(() => {
    if (index === data?.length - 1) {
      if (containerRef.current) {
        // Scroll to the far right of the container using scrollLeft
        containerRef.current.scrollTo({
          left: containerRef.current.scrollWidth, // Scroll to the far right of the container
          behavior: "smooth", // Smooth scrolling effect
        });
      }
    }
  }, [index]);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-wrap max-[600px]:grid max-[600px]:grid-cols-2">
          {data?.map((list, ind) => (
            <div
              onClick={() => handleClick(list.link)}
              key={list.id}
              className={`relative max-[600px]:w-full overflow-hidden h-[30rem] max-[600px]:h-[20rem] w-1/4 object-cover bg-gray-200 shadow-lg group flex-shrink-0 transition-all duration-300 `} // Set width to 1/4 and added margin
              // If it's the last item, add hover event
              onMouseEnter={() => handleHoverLastItem(ind)}
            >
              {/* Image Section */}
              <img
                src={list.img}
                alt={list.title}
                className="w-full  h-full object-cover transition-opacity duration-300 group-hover:opacity-50" // Use w-full to fill the parent div
              />

              {/* Overlay Section */}
              <div
                className={
                  ind === index
                    ? "h-full pt-[70%] max-[600px]:pt-[40%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 max-[600px]:p-2 text-white opacity-100 transition-opacity duration-300"
                    : "h-full pt-[70%] max-[600px]:pt-[40%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 max-[600px]:p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Show overlay on hover
                }
              >
                <h3 className="text-xl font-semibold max-[600px]:text-base pb-2">
                  {list.title}
                </h3>
                <p className="text-sm max-[600px]:text-[0.8rem]">
                  {list.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="w-full flex max-[600px]:grid max-[600px]:grid-cols-2">
          {data?.slice(3, data?.length - 1).map((list, ind) => (
            <div
              onClick={() => handleClick(list.link)}
              key={list.id}
              className={`relative max-[600px]:w-full overflow-hidden h-[30rem] max-[600px]:h-[20rem] w-1/4 object-cover bg-gray-200 shadow-lg group flex-shrink-0 transition-all duration-300 `} // Set width to 1/4 and added margin
              // If it's the last item, add hover event
              onMouseEnter={() => handleHoverLastItem(ind)}
            >
              {console.log(ind,'index')}
              {/* Image Section */}
        {/* <img
                src={list.img}
                alt={list.title}
                className="w-full  h-full object-cover transition-opacity duration-300 group-hover:opacity-50" // Use w-full to fill the parent div
              />

              {/* Overlay Section */}
        {/* <div
                className={
                  ind === index
                    ? "h-full pt-[70%] max-[600px]:pt-[50%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 text-white opacity-100 transition-opacity duration-300"
                    : "h-full pt-[70%] max-[600px]:pt-[50%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Show overlay on hover
                }
              >
                <h3 className="text-xl font-semibold max-[600px]:text-base pb-2">
                  {list.title}
                </h3>
                <p className="text-sm max-[600px]:text-[0.8rem]">
                  {list.description}
                </p>
              </div>
            </div> */}
        {/* ))} */}
        {/* </div> */}
        <ScrollAnimation
          animateIn="rubberBand"
          className="max-[600px]:mt-10"
          duration={2}
        >
          <div className="w-full mt-2 p-4 max-[600px]:p-1">
            {data?.map((elem, index) => {
              return (
                <div
                  key={index}
                  id={elem.link}
                  className={`flex max-[600px]:flex-wrap shadow shadow-lg cursor-pointer hover:scale-105 transition-all shadow-black rounded justify-evenly items-center p-5 bg-gray-300 m-2 max-[600px]:m-1 ${
                    index % 2 !== 0 ? "flex-row-reverse ml-auto w-fit" : "w-fit"
                  }`}
                >
                  <img
                    className="w-[20rem] h-[20rem] object-cover rounded-lg shadow-lg"
                    src={elem.img}
                    alt={elem.title}
                  />
                  <div className="m-5 w-72 max-[600px]:w-full">
                    <h2 className="text-2xl font-extrabold max-[600px]:text-lg text-gray-800">
                      {elem.title}
                    </h2>
                    <p className="text-gray-600 leading-8 pr-2 text-base max-[600px]:text-sm text-justify">
                      {elem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Services;
