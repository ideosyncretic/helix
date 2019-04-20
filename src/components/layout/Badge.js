import React from "react";
import styled from "styled-components";

const Badge = ({ text, isLoading, isActive }) => {
  return <StyledBadge isActive={isActive}>{!isLoading && text}</StyledBadge>;
};

const StyledBadge = styled.div`
  background: ${({ isActive }) => (isActive ? "#FF4000" : "#505050")};
  color: ${({ isActive }) => (isActive ? "#000" : "#FFF")};
  font-size: 0.8rem;
  border-radius: 20px;
  padding: 4px 6px 4px 6px;
  margin-right: 2px;
  margin-bottom: 2px;
  display: inline-block;
`;

export default Badge;
