import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./routes/layouts/Layout.tsx";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizLayout from "./routes/layouts/QuizLayout.tsx";
import Quiz from "./routes/Quiz.tsx";
import QuizFinalized from "./routes/QuizFinalized.tsx";
import Library from "./routes/Library.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/library",
        element: <Library />,
        handle: { crumb: () => <Link to="/library">Library</Link> },
      },
    ],
  },
  {
    path: "/quiz",
    element: <QuizLayout />,
    children: [
      {
        path: "/quiz/:quizID",
        element: <Quiz />,
      },
      {
        path: "/quiz/:quizID/finalized",
        element: <QuizFinalized />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
