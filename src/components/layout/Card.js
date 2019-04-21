import React from "react";
import styled from "styled-components";

const Card = ({ classNames, children, title, intent }) => {
  return (
    <StyledCard classNames={classNames} intent={intent}>
      {title && <CardTitle title={title} />}
      {children}
    </StyledCard>
  );
};

const CardTitle = ({ title }) => {
  return <h3 style={{ marginTop: 0 }}>{title}</h3>;
};

const StyledCard = styled.div`
  background: ${({ intent }) => {
    if (intent === "success") {
      return "rgba(0, 135, 90, 0.1)";
    }
    if (intent === "warning") {
      return "rgba(255, 139, 0, 0.1)";
    }
  }};
  color: ${({ intent }) => {
    if (intent === "success") {
      return "rgba(0, 135, 90)";
    }
    if (intent === "warning") {
      return "rgb(255, 139, 0)";
    }
  }};
  border-radius: 5px;
  padding: 16px;
`;

export default Card;
