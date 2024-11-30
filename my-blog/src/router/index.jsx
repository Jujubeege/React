import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import PostDetail from "../pages/PostDetail/PostDetail";
import NewPost from "../pages/NewPost/NewPost";
import EditPost from "../pages/EditPost/EditPost";
import Profile from "../pages/Profile/Profile";
import BlogList from "../components/BlogList/BlogList";
import { posts } from "../data/posts";

import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: <BlogList posts={posts} />,
          },
          {
            path: ":id",
            element: <PostDetail />,
          },
          {
            path: "new",
            element: <NewPost />,
          },
          {
            path: ":id/edit",
            element: <EditPost />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
