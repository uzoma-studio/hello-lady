import './App.css';
import AgentIdPage from "./Pages/agentID";
import StartPage from "./Pages/start";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import audioFile from './Sounds/audio.mp3'

function App() {

  const audio = new Audio(audioFile)
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage audio={audio} />,
    },
    {
      path: "/id",
      element: <AgentIdPage audio={audio} />,
    },
    {
      path: "*",
      element: <StartPage audio={audio} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
