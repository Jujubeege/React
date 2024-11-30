import Header from "./components/Header";
import { RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import BlogList from "./components/BlogList/BlogList";
import { posts } from "./data/posts";
import { router } from "./router/index";
import "./App.css";
import PostEditor from "./components/PostEditor/PostEditor";

function App() {
  return (
    // Basic routing structure:
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="posts" element={<BlogList />} />
    //       {/* <Route path="posts/:id" element={<PostDetail />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <div className="app">
      {/* <Header />  */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
