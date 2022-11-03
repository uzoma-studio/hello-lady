import './App.css';
import AgentIdPage from "./Pages/agentID";
import StartPage from "./Pages/start";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
    },
    {
      path: "/upload",
      element: <AgentIdPage />,
    },
    {
      path: "*",
      element: <StartPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
