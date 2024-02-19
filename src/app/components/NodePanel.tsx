"use client"
import React, { useEffect, useState } from "react"; 
import { FiMessageCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux"; 
import { addNode, setNodes } from "../redux/reactFlowSlice";
import { NodeProps, RootState, TextData } from "../types/types"; 


const NodesPanel: React.FC = () => {
  // Extract nodes from the Redux store
  const nodes = useSelector((store: RootState) => store.reactFlow.nodes);
  const [inputValue, setInputValue] = useState(""); 
  const [selectedNode, setSelectedNode] = useState<NodeProps | null>(null); // Initialize state for selected node
  const dispatch = useDispatch(); // Initialize dispatch function from useDispatch hook

  // Handle function to add a new node
  const handleAddNode: React.MouseEventHandler<HTMLDivElement> = () => {
    dispatch(addNode()); // Dispatch action to add a new node
  };

  // Handle function to handle click on a node
  const handleNodeClick = (node: NodeProps) => {
    setSelectedNode(node); // Set selected node state
    setInputValue(node.data); // Set input value state
  };

  // Handle function to update input value
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value); // Update input value state
  };

  // Handle function to update a node
  const handleUpdateNode = () => {
    if (selectedNode) {
      const updatedNode: NodeProps<TextData> = {
        ...selectedNode,
        data: inputValue,
      };
      const updatedNodes: any = nodes.map((node) =>
        node.id === selectedNode.id ? updatedNode : node
      );
      dispatch(setNodes(updatedNodes)); // Dispatch action to update nodes
      setSelectedNode(null); // Reset selected node state
    }
  };

  // Effect hook to update selected node and input value when nodes change
  useEffect(() => {
    const selected = nodes.find((node) => node.selected);
    if (selected) {
      setSelectedNode(selected); // Update selected node state
      setInputValue(selected.data); // Update input value state
    } else {
      setSelectedNode(null); // Reset selected node state if no node is selected
    }
  }, [nodes]);

  // Render the NodesPanel component
  return (
    <div className="w-[20vw] h-screen border-l border-gray-300">
      {selectedNode ? ( // Render textarea and update button if a node is selected
        <div className="m-5">
          <p className="my-2 text-sm text-gray-500">Text</p>
          <textarea
            className="border max-w-full border-gray-500 rounded h-24 resize-y overflow-auto p-2"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            onClick={handleUpdateNode}
            className="bg-gray-50 border-gray-500 border-2 text-sm border-dashed hover:shadow-none shadow-md shadow-gray-500 transition-all duration-300 text-gray-500 rounded my-4 p-2 px-4"
          >
            Update
          </button>
        </div>
      ) : (
        <> {/* Render message circle and add node button if no node is selected */}
          <p className="mx-5 mt-2 text-sm text-gray-500">Click to add a chat</p>
          <div
            onClick={handleAddNode}
            className="border-2 m-5 flex hover:bg-blue-500 hover:text-white cursor-pointer text-blue-500 flex-col items-center text-center p-5 rounded-lg border-blue-500"
          >
            <FiMessageCircle size={30} />
            <h1 className="text-xl font-bold ">Message</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default NodesPanel; 
