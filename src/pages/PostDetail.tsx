import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "antd";
import styled from "styled-components";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Post {
  id: number;
  title: string;
  body: string;
}

const Container = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const PostImage = styled.img`
  width: 100%;
  height: 300px;
`;

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <Container>
      <Card
        style={{ width: "100%" }}
        cover={<PostImage src="/images/blog.jpg" alt="blog" />}
      >
        <Card.Meta title={post?.title} description={post?.body} />
      </Card>
    </Container>
  );
};

export default PostDetail;
