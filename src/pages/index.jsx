import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

//import shared layout
import Layout from "../components/Layout";

//import routes
import About from "./about";
import Category from "./category";
import Home from "./home";
import PostPage from "./post";
import Projects from "./projects";
import QuickView from "./quickview";
import SignIn from "./signin";
import SignUp from "./signup";
import Tutorials from "./tutorials";
import Writings from "./writings";

//define routes
const Pages = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="writings" element={<Writings />}></Route>
          <Route path="quickview" element={<QuickView />}></Route>
          <Route path="post/:slug" element={<PostPage />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="tutorials" element={<Tutorials />}></Route>
          <Route path="category/:tag" element={<Category />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
