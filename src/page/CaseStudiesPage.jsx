import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample data for case studies

const CaseStudiesPage = () => {
  const Navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const handleRedirect = (item) => {
    Navigate(`/case-studies/${item?._id}`, {
      state: item,
    });
  };
  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_Backend_url}/admin/get-projects`
      );
      setProjects(data?.projects);
    };
    fetchProjects();
  }, []);
  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-bold mb-6">Case Studies</h1>
      {projects?.length > 0 ? (
        <>
          <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((study) => (
              <div
                onClick={() => handleRedirect(study)}
                key={study.id}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={study.thumbnail}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{study.title}</h2>
                  <p
                    className="text-gray-700 mt-2"
                    dangerouslySetInnerHTML={{
                      __html:
                        study?.description?.length > 20
                          ? study.description?.substring(0, 20) + "..."
                          : study?.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-solid"></div>
          <h1 className="ml-4 text-xl">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;
