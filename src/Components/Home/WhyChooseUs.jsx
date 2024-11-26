import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl max-[600px]:text-2xl font-bold text-center text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 text-sm font-bold mb-12">
          Choosing Srinivasa Group for your construction and development needs
          offers numerous advantages.
        </p>

        {/* Features Grid using Grid layout */}
        <ScrollAnimation animateIn="bounceInRight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-24 p-4 max-w-screen-xl mx-auto mt-20">
            {/* Feature 1 */}
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4">
              <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center">
                <img
                  src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/idea-02-1.png?id=3450"
                  alt="Experience and Expertise"
                  className="w-16 lg:w-[5rem]"
                />
              </div>
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Experience and Expertise
                </h3>
                <p className="text-gray-600 text-sm">
                  With years of industry experience, we bring valuable knowledge and
                  expertise to each project. Our team consistently delivers high-quality
                  results on time and within budget.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4">
              <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center">
                <img
                  src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/medeal-2.png?id=3451"
                  alt="Comprehensive Services"
                  className="w-16 lg:w-[5rem]"
                />
              </div>
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Comprehensive Services
                </h3>
                <p className="text-gray-600 text-sm">
                  We provide a wide range of services, including earthmoving and
                  infrastructure development. Our holistic approach ensures that all
                  your project needs are met under one roof.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4">
              <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center">
                <img
                  src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/globe-1-1-1.png?id=3454"
                  alt="Timely Delivery"
                  className="w-16 lg:w-[5rem]"
                />
              </div>
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">
                  Timely Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  We prioritize timely project completion. Our team employs efficient
                  planning and streamlined processes to ensure deadlines are met without
                  compromising quality.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4">
              <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center">
                <img
                  src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/trophy-1.png?id=3456"
                  alt="Skilled Team"
                  className="w-16 lg:w-[5rem]"
                />
              </div>
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">Skilled Team</h3>
                <p className="text-gray-600 text-sm">
                  Our team consists of highly trained professionals across various
                  fields. Each member is committed to ensuring the success of every
                  project with precision and expertise.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4">
              <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center">
                <img
                  src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/blueprint-2-1-1.png?id=3487"
                  alt="Strong Reputation"
                  className="w-16 lg:w-[5rem]"
                />
              </div>
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">Strong Reputation</h3>
                <p className="text-gray-600 text-sm">
                  Srinivasa Earth Movers has built a reputation for excellence. Our
                  commitment to quality, integrity, and customer satisfaction sets us
                  apart in the industry.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-4">
              <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center">
                <img
                  src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/buisnessman-1-1.png?id=3453"
                  alt="Fleet of Machines"
                  className="w-16 lg:w-[5rem]"
                />
              </div>
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-gray-800">Fleet of Machines</h3>
                <p className="text-gray-600 text-sm">
                  At Srinivasa Earth Movers, we maintain a modern fleet of machines
                  to handle a wide variety of construction projects. Our equipment
                  ensures efficiency and precision in every job.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhyChooseUs;
