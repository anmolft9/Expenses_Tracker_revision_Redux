import React from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};
