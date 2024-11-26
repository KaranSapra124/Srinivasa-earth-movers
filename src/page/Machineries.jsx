import React from "react";
import Banner from "../Components/Services/Banner";
import Container from "../Components/Global/Container";

const Machineries = () => {
  const data = [
    {
      id: 1,
      img: "https://kasturiearthmovers.com/wp-content/uploads/2023/07/1-st-image.jpg",
      title: "Excavators",
    },
    {
      id: 2,
      img: "https://kasturiearthmovers.com/wp-content/uploads/2023/07/1-st-image.jpg",
      title: "Long Boom Excavator",
    },
    {
      id: 3,
      img: "https://kasturiearthmovers.com/wp-content/uploads/2023/07/1-st-image.jpg",
      title: "Rock Breaker Machine",
    },
  ];
  return (
    <div className="w-full">
      <Banner></Banner>
      <Container>
        <div className="w-full py-[100px] flex flex-wrap justify-center">
          {data.map((list) => {
            return (
              <div className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow-lg m-4">
                <a href="#">
                  <img className="rounded-t-lg" src={list.img} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {list.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Machineries;
