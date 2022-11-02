import './App.css';
import SubmitPage from "./Pages/submit";
import UploadPage from "./Pages/upload";
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
      element: <UploadPage />,
    },
    {
      path: "/submit",
      element: <SubmitPage />,
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
