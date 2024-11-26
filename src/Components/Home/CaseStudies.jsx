import React from "react";

const caseStudies = [
  {
    image:
      "https://images.unsplash.com/photo-1684474439869-325e08624e84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9uJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    category: "Construction",
    title: "Modern Urban Complex",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682617326998-776d7443f02c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
    category: "Infrastructure",
    title: "High-Rise Commercial Tower",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682142150500-9c616021428a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWFydGglMjBtb3ZlcnN8ZW58MHx8MHx8fDA%3D",
    category: "Construction",
    title: "Sustainable Residential Development",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682617327934-09041990032e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
    category: "Infrastructure",
    title: "Bridge Engineering Project",
  },
  {
    image:
      "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
    category: "Construction",
    title: "Industrial Facility Expansion",
  },
];

const CaseStudies = () => {
  return (
    <div className="relative h-[200px] mt-10 w-full overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-5  opacity-70">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${study.image})` }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative  z-10 flex max-[600px]:flex-wrap max-[600px]:justify-center  justify-between items-center justify-center h-full text-white text-center bg-black bg-opacity-50 p-8">
        <h1 className="text-4xl max-[600px]:text-2xl font-bold mb-6">
          Discover Our Portfolio of Completed Projects
        </h1>

        <a
          href="/projects"
          className="px-6 py-3 bg-[#FFE31A] text-black  rounded-full font-bold transition duration-300"
        >
          Explore Our Projects
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
