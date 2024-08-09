import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { List, Button } from "antd";
import styled from "styled-components";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Container = styled.div`
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
`;

const BlogImage = styled.img`
  width: 120px;
  height: 75px;
  object-fit: cover;
`;

const Blogs: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/users/1/posts`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Container>
      <h2>Blogs</h2>
      <List
        style={{ flex: 1 }}
        loading={loading}
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(post) => (
          <List.Item
            actions={[
              <Link key={"edit"} to={`/post-edit/${post.id}`}>
                <Button type="primary">Edit</Button>
              </Link>,
              <Button danger type="primary" key="delete">
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<BlogImage src="/images/blog.jpg" alt="blog" />}
              title={<Link to={`/posts/${post.id}`}>{post.title}</Link>}
              description={post.body}
            />
          </List.Item>
        )}
      />
    </Container>
  );
};

export default Blogs;
