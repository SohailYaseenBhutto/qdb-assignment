import React, { useEffect } from "react";
import { UserOutlined, SignalFilled, MessageFilled } from "@ant-design/icons";
import { Avatar, Menu, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useGetUser } from "../hooks/useGetUser";
const { Sider } = Layout;

const MenuItems = [
  {
    key: "dashboard",
    title: "Dashboard",
    route: "/",
    icon: <SignalFilled />,
  },
  {
    key: "blogs",
    title: "Blogs",
    route: "/blogs",
    icon: <MessageFilled />,
  },
];

const LogoContainer = styled.div`
  background-color: #397bf6;
  padding: 16px;
`;

const StyledLogo = styled.img`
  width: 80px;
  height: 30px;
`;

const LoadingContainer = styled.div`
  height: 140px;
  padding: 16px;
  text-align: center;
  color: white;
`;

const UserInfo = styled.div`
  height: 140px;
  padding: 16px;
  text-align: center;
  color: black;
  .ant-avatar {
    background-color: #397bf6;
    margin-bottom: 8px;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
  backgroundColor: "white",
  boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
};

const Sidebar: React.FC = () => {
  const { isLoading, fetchUser, user } = useGetUser();

  useEffect(() => {
    fetchUser();
  }, []);

  const location = useLocation();
  let selectedKey = "dashboard";

  if (location.pathname === "/blogs" || location.pathname.includes("/post")) {
    selectedKey = "blogs";
  }

  return (
    <Sider style={siderStyle}>
      <LogoContainer>
        <StyledLogo src="/images/logo.png" alt="Logo" />
      </LogoContainer>
      {isLoading ? (
        <LoadingContainer>Loading</LoadingContainer>
      ) : (
        <UserInfo>
          <Avatar
            size={64}
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          />
          <p style={{ color: "gray" }}>Hello</p>
          <p>{user.name}</p>
        </UserInfo>
      )}

      <Menu defaultSelectedKeys={[selectedKey]}>
        {MenuItems.map((item) => {
          return (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.route}>{item.title}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
