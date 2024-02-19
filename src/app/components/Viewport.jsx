"use client"
import React, { useMemo, useCallback } from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css"; 
import TextNode from "./TextNode.tsx"; 
import { useDispatch, useSelector } from "react-redux"; 
import {
  onNodesChange,
  onEdgesChange,
  onConnect,
} from "../redux/reactFlowSlice"; 

export default function Viewport() {
  // Retrieve nodes and edges from the Redux store
  const nodes = useSelector((state) => state.reactFlow.nodes);
  const edges = useSelector((state) => state.reactFlow.edges);
  const dispatch = useDispatch();

  // Define node types and memoize them
  const nodeTypes = useMemo(() => ({ textNode: TextNode }), []);

  // Define callback function to handle changes in nodes
  const handleNodesChange = useCallback(
    (changes) => {
      dispatch(onNodesChange(changes)); // Dispatch action to update nodes in the Redux store
    },
    [dispatch]
  );

  // Define callback function to handle changes in edges
  const handleEdgesChange = useCallback(
    (changes) => {
      dispatch(onEdgesChange(changes)); // Dispatch action to update edges in the Redux store
    },
    [dispatch]
  );

  // Define callback function to handle connection events
  const handleOnConnect = useCallback(
    (changes) => {
      dispatch(onConnect(changes)); // Dispatch action to update edges in the Redux store
    },
    [dispatch]
  );


  // Render the Viewport component
  return (
    <div style={{ width: "80vw", height: "100vh" }}>
      {/* Render the ReactFlow component */}
      <ReactFlow
        nodes={nodes} // Pass nodes to ReactFlow component
        onNodesChange={handleNodesChange} // Handle nodes change events
        edges={edges} // Pass edges to ReactFlow component
        onEdgesChange={handleEdgesChange} // Handle edges change events
        fitView // Automatically fit the view to the container
        onConnect={handleOnConnect} // Handle connection events
        nodeTypes={nodeTypes} // Define custom node types
      >
        <Background /> {/* Render the background */}
        <Controls /> {/* Render the controls */}
      </ReactFlow>
    </div>
  );
}
