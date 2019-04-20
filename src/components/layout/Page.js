import React from "react";
import styled from "styled-components";

const Page = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

const StyledPage = styled.div`
  background: #f4f6f8;
  border-radius: 3px;
  padding: 20px 20px 20px 20px;
  overflow-y: scroll;
  height: 100%;
`;

export default Page;
