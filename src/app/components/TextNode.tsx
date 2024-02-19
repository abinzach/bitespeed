"use client";
import { useCallback, useEffect, useState } from "react";
import { FaMessage, FaWhatsapp } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Handle, Position } from "reactflow";
import { NodeProps, RootState, TextData } from "../types/types";

// Define the initial style for the handle
const handleStyle = { left: 10 };

// Define the TextNode component
export default function TextNode(props: NodeProps<TextData>) {
  // Extract data from props and initialize state for text
  const [text, setText] = useState(props.data ?? "");

  // Update text state when props.data changes
  useEffect(() => {
    setText(props.data ?? "");
  }, [props.data]);

  // Get nodes from the Redux store
  const nodes = useSelector((store: RootState) => store.reactFlow.nodes);

  // Determine the minimum height of the node based on whether text is present
  const minHeight = text ? "auto" : "65px";

  // Render the TextNode component
  return (
    <>
      <div
        className="shadow-md rounded-md bg-white border-2 border-stone-400"
        style={{ minHeight }}
      >
        <div className="flex w-64 items-center justify-between p-1 px-3 rounded-t bg-green-700">
          <div className="flex items-center gap-3">
            <FaMessage color="white" /> 
            <div className="text-white font-semibold">Send message</div>{" "}
            {/* Render text */}
          </div>
          <FaWhatsapp color="white" />
        </div>
        <div className="flex">
          <div className="ml-2">
            <div
              className="text-lg text-gray-500"
              style={{ width: "200px", wordWrap: "break-word" }} // Apply styles for text wrapping
            >
              {text} {/* Render text */}
            </div>
          </div>
        </div>
        <Handle
          type="target"
          position={Position.Left} // Set position of the target handle
          className="w-16 !bg-teal-500" // Apply styling to the handle
        />
        <Handle
          type="source"
          position={Position.Right} // Set position of the source handle
          className="w-16 !bg-teal-500" // Apply styling to the handle
        />
      </div>
    </>
  );
}
