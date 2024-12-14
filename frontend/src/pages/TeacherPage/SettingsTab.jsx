import React, { useState } from "react";

const SettingsTab = () => {
  const [courseName, setCourseName] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [illustration, setIllustration] = useState(null);
  const [description, setDescription] = useState("");

  const handleIllustrationUpload = (e) => {
    setIllustration(e.target.files[0]);
  };

  const handleSave = () => {
    if (!courseName || !courseLink || !illustration || !description) {
      alert("All fields are required!");
      return;
    }
    console.log("Settings Saved:", {
      courseName,
      courseLink,
      illustration,
      description,
    });
    alert("Changes saved successfully!");
  };

  const handleDiscard = () => {
    // Reset all fields
    setCourseName("");
    setCourseLink("");
    setIllustration(null);
    setDescription("");
    alert("Changes discarded.");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Course Settings</h2>
      <form className="flex flex-col gap-6">
        {/* Course Name */}
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="p-3 border rounded"
          required
        />

        {/* Link to the Course */}
        <input
          type="url"
          placeholder="Course Link (Condensed)"
          value={courseLink}
          onChange={(e) => setCourseLink(e.target.value)}
          className="p-3 border rounded"
          required
        />

        {/* Illustrations Upload */}
        <div>
          <label className="block mb-2 font-medium">Upload Illustration:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleIllustrationUpload}
            className="p-3 border rounded"
            required
          />
          {illustration && (
            <p className="text-sm text-gray-500 mt-2">
              Selected File: {illustration.name}
            </p>
          )}
        </div>

        {/* Brief Description */}
        <textarea
          placeholder="Brief Description of the Course"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 border rounded"
          rows="5"
          required
        ></textarea>

        {/* Save/Discard Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="p-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={handleDiscard}
            className="p-3 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Discard Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsTab;
