import React, { useState } from "react";

const MyLearningPage = () => {
  const [activeTab, setActiveTab] = useState("all-courses"); // State to manage active tab
  const [courses] = useState([
    {
      id: 1,
      title: "How to Create an Online Course: The Official Udemy Guide",
      instructor: "Udemy Instructor Team",
      thumbnail:
        "https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg",
      progress: 40,
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      instructor: "John Doe",
      thumbnail:
        "https://s.udemycdn.com/instructor/dashboard/video-creation.jpg",
      progress: 60,
    },
    // Add more courses as needed
  ]);

  const [showNotification, setShowNotification] = useState(true);

  const dismissNotification = () => {
    setShowNotification(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "all-courses":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border p-4 rounded-lg shadow-md flex"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-40 h-40 object-cover rounded-md mr-4"
                />
                <div className="p-4 flex-1">
                  <h2 className="font-bold text-lg">{course.title}</h2>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-600">
                      {course.progress}% complete
                    </span>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                      onClick={() =>
                        console.log(`Continue learning ${course.id}`)
                      }
                    >
                      Continue Learning
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "my-lists":
        return <div>My Lists Content</div>;
      case "wishlist":
        return <div>Wishlist Content</div>;
      case "archived":
        return <div>Archived Content</div>;
      case "learning-tools":
        return <div>Learning Tools Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <h1 className="text-3xl font-bold">My Learning</h1>
      </header>

      {/* Tabs */}
      <nav className="flex space-x-4 bg-gray-100 p-4">
        <button
          className={`font-semibold ${
            activeTab === "all-courses"
              ? "text-gray-800 border-b-2 border-black"
              : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setActiveTab("all-courses")}
        >
          All courses
        </button>
        <button
          className={`font-semibold ${
            activeTab === "my-lists"
              ? "text-gray-800 border-b-2 border-black"
              : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setActiveTab("my-lists")}
        >
          My Lists
        </button>
        <button
          className={`font-semibold ${
            activeTab === "wishlist"
              ? "text-gray-800 border-b-2 border-black"
              : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist
        </button>
        <button
          className={`font-semibold ${
            activeTab === "archived"
              ? "text-gray-800 border-b-2 border-black"
              : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setActiveTab("archived")}
        >
          Archived
        </button>
        <button
          className={`font-semibold ${
            activeTab === "learning-tools"
              ? "text-gray-800 border-b-2 border-black"
              : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setActiveTab("learning-tools")}
        >
          Learning Tools
        </button>
      </nav>

      <div className="p-6">
        {/* Notification Section */}
        {showNotification && (
          <div className="bg-gray-100 p-4 mb-6 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Schedule learning time</h3>
              <p>
                Set time aside to learn and get reminders using your learning
                scheduler.
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Get started
              </button>
              <button
                className="text-gray-600 hover:underline"
                onClick={dismissNotification}
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Render Content Based on Active Tab */}
        {renderContent()}
      </div>
    </div>
  );
};

export default MyLearningPage;
