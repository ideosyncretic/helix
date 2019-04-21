import React from "react";
import styled from "styled-components";

const Badge = ({ text, isLoading, isActive }) => {
  if (isLoading) {
    return (
      <React.Fragment>
        <StyledBadge isActive={isActive} isLoading={isLoading}>
          {isLoading && "xxxx"}
        </StyledBadge>
        <StyledBadge isActive={isActive} isLoading={isLoading}>
          {isLoading && "xxxxxxx"}
        </StyledBadge>
        <StyledBadge isActive={isActive} isLoading={isLoading}>
          {isLoading && "xxxxx"}
        </StyledBadge>
        <StyledBadge isActive={isActive} isLoading={isLoading}>
          {isLoading && "xxxxxx xxxxxx"}
        </StyledBadge>
        <StyledBadge isActive={isActive} isLoading={isLoading}>
          {isLoading && "xxxxxxxxx"}
        </StyledBadge>
      </React.Fragment>
    );
  }

  return (
    <StyledBadge isActive={isActive} isLoading={isLoading}>
      {!isLoading && text}
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  background: ${({ isActive }) => (isActive ? "#FF4000" : "#505050")};
  color: ${({ isActive, isLoading }) => {
    if (isLoading) {
      return "#505050";
    } else {
      if (isActive) return "#000";
      if (!isActive) return "#FFF";
    }
  }};
  font-size: 0.8rem;
  border-radius: 20px;
  padding: 4px 6px 4px 6px;
  margin-right: 2px;
  margin-bottom: 2px;
  display: inline-block;
`;

export default Badge;
