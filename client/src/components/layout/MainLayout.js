import React from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";

export const MainLayout = ({ children, isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Container>{children}</Container>
    </div>
  );
};
