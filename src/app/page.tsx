// Importing the NodesPanel and Viewport components
import NodesPanel from "./components/NodePanel";
import Viewport from "./components/Viewport";

// Default function component representing the Home page
export default function Home() {
  // Rendering the Viewport and NodesPanel components inside a flex container
  return (
    <div className="flex">
      {/* Viewport component responsible for displaying the flow chart */}
      <Viewport />
      {/* NodesPanel component for adding and managing nodes in the flow chart */}
      <NodesPanel />
    </div>
  );
}
