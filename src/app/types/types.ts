// Importing necessary types from 'reactflow'
import { Handle, Position, XYPosition, CoordinateExtent } from "reactflow";

// Definition of the Node type
export type Node<T, U extends string> = {
  id: string; // Unique identifier for the node
  position: XYPosition; // Position of the node on the canvas
  data: T; // Data associated with the node
  type?: U; // Type of the node (optional)
  sourcePosition?: Position; // Position of the source handle
  targetPosition?: Position; // Position of the target handle
  hidden?: boolean; // Whether the node is hidden
  selected?: boolean; // Whether the node is selected
  dragging?: boolean; // Whether the node is being dragged
  draggable?: boolean; // Whether the node is draggable
  selectable?: boolean; // Whether the node is selectable
  connectable?: boolean; // Whether the node is connectable
  resizing?: boolean; // Whether the node is resizing
  deletable?: boolean; // Whether the node is deletable
  dragHandle?: string; // Drag handle for the node
  width?: number | null; // Width of the node
  height?: number | null; // Height of the node
  parentNode?: string; // ID of the parent node
  zIndex?: number; // Z-index of the node
  extent?: "parent" | CoordinateExtent; // Extent of the node
  expandParent?: boolean; // Whether to expand the parent node
  positionAbsolute?: XYPosition; // Absolute position of the node
  ariaLabel?: string; // ARIA label for accessibility
  focusable?: boolean; // Whether the node is focusable
  style?: React.CSSProperties; // CSS styles for the node
  className?: string; // CSS class name for the node
};

// Definition of the NodeProps interface
export interface NodeProps<T = any> {
  id: string; // Unique identifier for the node
  data: string; // Data associated with the node
  dragHandle?: boolean; // Whether the node has a drag handle
  type?: string; // Type of the node
  selected?: boolean; // Whether the node is selected
  isConnectable?: boolean; // Whether the node is connectable
  zIndex?: number; // Z-index of the node
  xPos: number; // X position of the node
  yPos: number; // Y position of the node
  dragging: boolean; // Whether the node is being dragged
  targetPosition?: Position; // Position of the target handle
  sourcePosition?: Position; // Position of the source handle
}

// Definition of the TextData interface
export interface TextData {
  data?: string; // Text data associated with the node
}

// Definition of the RootState interface
export interface RootState {
  reactFlow: {
    nodes: NodeProps[]; // Array of node properties
    edges: any[]; // Array of edge properties (not fully defined)
  };
}
