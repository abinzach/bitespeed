import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "reactflow";

// Define the interface for the react flow state
interface RFState {
  nodes: Node[]; // Array of nodes
  edges: Edge[]; // Array of edges
}

// Function to generate a random ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Function to generate a random position
const getRandomPosition = () => ({
  x: Math.random() * (70 - 10) + 10, // Adjust the range as needed
  y: Math.random() * (70 - 10) + 10, // Adjust the range as needed
});

// Initial state for the react flow
const initialState: RFState = {
  nodes: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      type: "textNode",
      data: "Hello",
    },
  ],
  edges: [],
};

// Create a slice for the react flow
export const reactFlowSlice = createSlice({
  name: "reactFlow",
  initialState,
  reducers: {
    // Add a new node to the state
    addNode: (state) => {
      const newNode: Node = {
        id: generateId(),
        position: getRandomPosition(),
        type: "textNode",
        data: "Hello",
      };
      state.nodes.push(newNode);
    },
    // Set the nodes in the state
    setNodes: (state, action: PayloadAction<Node[]>) => {
      state.nodes = action.payload;
    },
    // Set the edges in the state
    setEdges: (state, action: PayloadAction<Edge[]>) => {
      state.edges = action.payload;
    },
    // Handle node changes
    onNodesChange: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    // Handle edge changes
    onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    // Handle node connection
    onConnect: (state, action: PayloadAction<Connection>) => {
      state.edges = addEdge(action.payload, state.edges);
    },
  },
});

// Export actions
export const {
  addNode,
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  onConnect,
} = reactFlowSlice.actions;

// Export reducer
export default reactFlowSlice.reducer;
