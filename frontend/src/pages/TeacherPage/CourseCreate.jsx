// src/Courses.js
import React, { useState } from "react";
import SettingsTab from "./SettingsTab";
import CourseContentTab from "./CourseContentTab";
import PricingTab from "./PricingTab";

const CourseCreate = () => {
  const [activeTab, setActiveTab] = useState("settings");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "settings":
        return <SettingsTab />;
      case "courseContent":
        return <CourseContentTab />;
      case "pricing":
        return <PricingTab />;
      default:
        return <SettingsTab />;
    }
  };

  return (
    <div className="max-w-[800px] mx-auto py-12">
      <h1 className="text-center text-2xl font-bold mb-8">
        Create a New Course
      </h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          className={`p-3 ${
            activeTab === "settings" ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded-l`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
        <button
          className={`p-3 ${
            activeTab === "courseContent"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("courseContent")}
        >
          Course Content
        </button>
        <button
          className={`p-3 ${
            activeTab === "pricing" ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded-r`}
          onClick={() => setActiveTab("pricing")}
        >
          Pricing
        </button>
      </div>

      {/* Active Tab Content */}
      <div className="p-6 border rounded bg-white shadow-sm">
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default CourseCreate;
/*
import React, { useState } from "react";

const CourseCreate = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("video", video);

    console.log("Course Created:", {
      courseName,
      description,
      category,
      price,
      image,
      video,
    });

    alert("Course created successfully!");
    // Here, send the `formData` to the server using a POST request.
  };

  return (
    <div className="max-w-[800px] mx-auto py-12">
      <h1 className="text-center text-2xl font-bold mb-8">
        Create a New Course
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Course Name }
        
        <input
          type="text"
          placeholder="Course Title"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="p-3 border rounded"
          required
        />

        {/* Course Description }
        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 border rounded"
          rows="5"
          required
        ></textarea>

        {/* Course Category }
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border rounded"
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
          <option value="marketing">Marketing</option>
        </select>

        {/* Course Price }
        <input
          type="number"
          placeholder="Course Price (USD)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-3 border rounded"
          min="0"
          required
        />

        {/* Image Upload }
        <div>
          <label className="block mb-2 font-medium">Upload Cover Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="p-3 border rounded"
            required
          />
        </div>

        {/* Video Upload }
        <div>
          <label className="block mb-2 font-medium">Upload Intro Video:</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="p-3 border rounded"
            required
          />
        </div>

        {/* Submit Button }
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CourseCreate;
*/
