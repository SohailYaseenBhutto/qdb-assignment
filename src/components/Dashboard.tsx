import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: white;
  color: black;
  padding-left: 20px;
  padding-top: 2px;
`;

const Dashboard: React.FC = () => (
  <Container>
    <h2>Dashboard</h2>
    <p>Welcome to the Dashboard.</p>
  </Container>
);

export default Dashboard;
