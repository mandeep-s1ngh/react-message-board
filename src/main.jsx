import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllPosts, { loader as postsLoader } from "./routes/AllPosts.jsx";
import CreateNewPost, {
  action as formHandler,
} from "./routes/CreateNewPost.jsx";
import SinglePostDetails, {
  loader as postDetailsLoader,
} from "./routes/SinglePostDetails.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <AllPosts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <CreateNewPost />,
            action: formHandler,
          },
          {
            path: "/:postId",
            element: <SinglePostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
