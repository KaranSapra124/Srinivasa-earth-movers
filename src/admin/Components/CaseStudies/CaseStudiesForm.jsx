import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";

const CaseStudiesForm = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [results, setResults] = useState(""); // New state for results
  const [challenges, setChallenges] = useState(""); // New state for challenges
  const [solutions, setSolutions] = useState(""); // New state for solutions

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleImagesChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = new FormData();
    projectData.append("title", title);
    projectData.append("description", description);
    projectData.append("results", results); // Append results
    projectData.append("challenges", challenges); // Append challenges
    projectData.append("solutions", solutions); // Append solutions
    projectData.append("thumbnail", thumbnail);
    images.forEach((elem) => projectData.append("images", elem));

    try {
      let { data } = await axios.post(
        `${import.meta.env.VITE_Backend_url}/admin/add-project`,
        projectData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data?.message);
    } catch (error) {
      toast.error("Error submitting the form");
    }
  };

  return (
    <div className=" max-h-[40rem] max-[600px]:max-w-screen-sm overflow-y-scroll  mx-auto py-10 px-2 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Case Study</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="thumbnail"
          >
            Thumbnail Image
          </label>
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            onChange={handleThumbnailChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="images"
          >
            Additional Images
          </label>
          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
            className="mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Results
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={results}
            onChange={(event, editor) => {
              const data = editor.getData();
              setResults(data);
            }}
            className="mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Challenges Faced
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={challenges}
            onChange={(event, editor) => {
              const data = editor.getData();
              setChallenges(data);
            }}
            className="mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Solutions
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={solutions}
            onChange={(event, editor) => {
              const data = editor.getData();
              setSolutions(data);
            }}
            className="mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CaseStudiesForm;
