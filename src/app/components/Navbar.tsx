"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/types";

const Navbar = () => {
  const [saveMessage, setSaveMessage] = useState("");
  const dispatch = useDispatch();
  const flow = useSelector((state: RootState) => state.reactFlow); // Get flow data from the Redux store

  // Handle function to save changes
  const handleSaveChanges = () => {
    // Extract target IDs from flow edges
    const targetIds = new Set(flow.edges.map((edge) => edge.target));
    // Filter nodes without targets
    const nodesWithoutTargets = flow.nodes.filter(
      (node) => !targetIds.has(node.id)
    );

    // Check if there are more than one node without targets
    if (nodesWithoutTargets.length > 1) {
      setSaveMessage("Error saving Flow"); // Set error message if more than one node has no targets
    } else {
      setSaveMessage("Flow saved successfully"); // Set success message if all nodes have targets
    }
  };

  // Render the Navbar component
  return (
    <div className="w-full px-5 p-2 flex justify-between items-center h-14 bg-gray-200">
      <h1 className="text-4xl text-gray-500 font-semibold">chat.</h1>
      {saveMessage !== "" && ( // Render save message if it's not empty
        <p
          className={`${
            saveMessage.includes("Error")
              ? "bg-red-500 rounded p-1 px-3 text-white text-sm"
              : "bg-green-500 rounded p-1 px-3 text-white text-sm"
          }`}
        >
          {saveMessage}
        </p>
      )}
      <button
        className="p-1 px-2 text-sm rounded border-gray-500 border hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
        onClick={handleSaveChanges} // Call handleSaveChanges function on button click
      >
        Save changes
      </button>
    </div>
  );
};

export default Navbar;
