import React from "react";
import Container from "../Global/Container";

const Section2 = () => {
  return (
    <div
      className="w-full py-16"
      style={{
        backgroundImage:
          'url("https://kasturiearthmovers.com/wp-content/uploads/2023/07/kasturi-earthmovers-company-overview-1-scaled.jpg?id=4086")',
      }}
    >
      <Container>
        <div className="w-full p-8 pb-20 bg-white shadow-lg rounded-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Expertise and Capabilities
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            With a team of highly skilled professionals and advanced equipment,
            we possess the expertise and capabilities to undertake projects of
            various sizes and complexities. Our experienced engineers, project
            managers, and operators work collaboratively to ensure successful
            project outcomes, adhering to timelines and budgetary requirements.
            Our experienced engineers, project managers, and operators work
            collaboratively to ensure successful project outcomes, adhering to
            timelines and budgetary requirements.
          </p>
          {/* Uncomment this if you want to include the button */}
          {/* <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-200">
            Our History
          </button> */}
        </div>
      </Container>
    </div>
  );
};

export default Section2;
