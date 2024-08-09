import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Blogs from "./components/Blogs";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/EditPost";
import Sidebar from "./components/Sidebar";
const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout hasSider>
        <Sidebar />
        <Layout style={{ marginInlineStart: 200 }}>
          <Content
            style={{
              margin: "20px 16px 16px",
              overflow: "initial",
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/post-edit/:id" element={<EditPost />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
