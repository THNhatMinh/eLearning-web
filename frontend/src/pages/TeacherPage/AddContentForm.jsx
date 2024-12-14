import React, { useState } from "react";

const AddContentForm = ({ onSave, onCancel, lessonTitle }) => {
  const [contentType, setContentType] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [textContent, setTextContent] = useState("");

  const handleSave = () => {
    // Validate the form fields
    if (!contentType) {
      alert("Please select a content type.");
      return;
    }

    // Prepare the content data
    const contentData = {
      type: contentType,
      video: contentType === "video" ? videoFile : null,
      text: contentType === "text" ? textContent : null,
      pdf: contentType === "pdf" ? pdfFile : null,
    };

    // Pass data to the parent
    onSave(contentData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-[500px]">
        <h3 className="text-lg font-bold mb-4">
          Add Content to: {lessonTitle}
        </h3>

        {/* Select Content Type */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Content Type:</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="contentType"
                value="video"
                checked={contentType === "video"}
                onChange={(e) => setContentType(e.target.value)}
              />
              <span className="ml-2">Video</span>
            </label>
            <label>
              <input
                type="radio"
                name="contentType"
                value="text"
                checked={contentType === "text"}
                onChange={(e) => setContentType(e.target.value)}
              />
              <span className="ml-2">Text</span>
            </label>
            <label>
              <input
                type="radio"
                name="contentType"
                value="pdf"
                checked={contentType === "pdf"}
                onChange={(e) => setContentType(e.target.value)}
              />
              <span className="ml-2">PDF</span>
            </label>
            <label>
              <input
                type="radio"
                name="contentType"
                value="quiz"
                checked={contentType === "quiz"}
                onChange={(e) => setContentType(e.target.value)}
              />
              <span className="ml-2">Quiz</span>
            </label>
          </div>
        </div>

        {/* Dynamic Form Fields */}
        {contentType === "video" && (
          <div className="mb-4">
            <label className="block font-medium mb-2">Upload Video:</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="p-2 border rounded w-full"
            />
          </div>
        )}

        {contentType === "text" && (
          <div className="mb-4">
            <label className="block font-medium mb-2">Text Content:</label>
            <textarea
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              className="p-2 border rounded w-full"
              rows="6"
              placeholder="Write your text content here..."
            ></textarea>
          </div>
        )}

        {contentType === "pdf" && (
          <div className="mb-4">
            <label className="block font-medium mb-2">Upload PDF:</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="p-2 border rounded w-full"
            />
          </div>
        )}

        {contentType === "quiz" && (
          <div className="mb-4">
            <label className="block font-medium mb-2">
              Quiz Section (Coming Soon):
            </label>
            <p className="text-gray-500">Quiz creation is under development.</p>
          </div>
        )}

        {/* Save/Cancel Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onCancel}
            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContentForm;
