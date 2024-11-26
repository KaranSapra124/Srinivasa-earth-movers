import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";

const EditCaseStudies = ({ editItem }) => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [results, setResults] = useState("");
  const [challenges, setChallenges] = useState("");
  const [solutions, setSolutions] = useState("");
  const [selectedImages, setSelectedImges] = useState([]);

  const handleThumbnailChange = (e) => {
    // console.log(e.target.files[0]);
    setThumbnail(e.target.files[0]);
  };

  const handleImagesChange = (e) => {
    // const newArr = [...images, ...e.target.files];
    setSelectedImges([...e.target.files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = new FormData();
    const imageFormData = new FormData();
    projectData.append("title", title);
    projectData.append("description", description);
    projectData.append("results", results);
    projectData.append("challenges", challenges);
    projectData.append("solutions", solutions);
    imageFormData.append("thumbnail", thumbnail);

    // Append new images
    images.forEach((elem) => projectData.append("images", elem));
    selectedImages?.length > 0 &&
      selectedImages.forEach(
        (elem) => imageFormData.append("selectedImages", elem) // Ensure this matches the backend
      );

    if (selectedImages?.length > 0) {
      try {
        let { data } = await axios.post(
          `${import.meta.env.VITE_Backend_url}/admin/edit-projects/${
            editItem?._id
          }`,
          imageFormData,
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
    } else {
      try {
        let { data } = await axios.post(
          `${import.meta.env.VITE_Backend_url}/admin/edit-projects/${
            editItem?._id
          }`,
          {
            title: title,
            images: images,
            description: description,
            challenges: challenges,
            solution: solutions,
            // thumbnail: thumbnail,
            results: results,
          }
          //   {
          //     headers: {
          //       "Content-Type": "multipart/form-data",
          //     },
          //   }
        );
        toast.success(data?.message);
      } catch (error) {
        toast.error("Error submitting the form");
      }
    }
  };
  //   const handleChangeImage = async (e) => {
  //     const imageData = new FormData();
  //     imageData.append("thumbnail", thumbnail);
  //     try {
  //       let { data } = await axios.post(
  //         `${import.meta.env.VITE_Backend_url}/admin/edit-thumbnail/${
  //           editItem?._id
  //         }`,
  //         projectData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //       toast.success(data?.message);
  //     } catch (error) {
  //       toast.error("Error submitting the form");
  //     }
  //   };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem?.title);
      setImages(editItem?.images || []); // Ensure it's an array
      setDescription(editItem?.description);
      setSolutions(editItem?.solution);
      setChallenges(editItem?.challenges);
      setThumbnail(editItem?.thumbnail);
      setResults(editItem?.results);
    }
  }, [editItem]);

  return (
    <div className="max-h-[40rem] max-[600px]:max-w-screen-sm overflow-y-scroll mx-auto py-10 px-2 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
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
            // required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {/* {console.log(typeof(thumbnail))} */}
          {thumbnail && (
            <img
              src={
                typeof thumbnail === "object"
                  ? URL.createObjectURL(thumbnail)
                  : `${import.meta.env.VITE_Uploads}${thumbnail}`
              }
              alt="Thumbnail Preview"
              className="w-20 m-2"
            />
          )}
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus :outline-none focus:ring focus:ring-blue-500"
          />
          <div className="flex flex-wrap mt-2">
            {images.map((elem, index) => (
              <div key={index} className="relative m-2">
                {/* {console.log(typeof elem)} */}
                <img
                  src={
                    typeof elem === "object"
                      ? URL.createObjectURL(elem)
                      : `${import.meta.env.VITE_Uploads}${elem}`
                  }
                  alt={`Image ${index + 1}`}
                  className="w-20"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            ))}
          </div>
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

export default EditCaseStudies;
