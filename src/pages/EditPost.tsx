import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Post {
  id: number;
  title: string;
  body: string;
}

const formFields = [
  {
    name: "title",
    label: "Title",
    rules: [{ required: true, message: "Please input the title!" }],
    component: <Input />,
  },
  {
    name: "body",
    label: "Body",
    rules: [{ required: true, message: "Please input the body!" }],
    component: <Input.TextArea rows={6} />, // Increased height
  },
];

const Container = styled.div`
  height: 100vh;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
`;

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
        setPost(response.data);
        form.setFieldsValue(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id, form]);

  const onFinish = async (values: Post) => {
    try {
      await axios.put(`${API_BASE_URL}/posts/${id}`, values);
      navigate(`/posts/${id}`, { replace: true });
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <Container>
      <h2>Edit Post</h2>
      {post && (
        <Form form={form} onFinish={onFinish}>
          {formFields.map(({ name, label, rules, component }) => (
            <Form.Item key={name} name={name} label={label} rules={rules}>
              {component}
            </Form.Item>
          ))}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      )}
    </Container>
  );
};

export default EditPost;
