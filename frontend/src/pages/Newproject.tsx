import React from "react";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Create a New Project</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Name
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Enter project name"
        />
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Create Project
        </button>
      </div>
    </div>
  );
};

export default NewProject;
