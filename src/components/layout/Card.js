import React from "react";
import styled from "styled-components";

const Card = ({ children, title }) => {
  return (
    <StyledCard>
      {title && <CardTitle title={title} />}
      {children}
    </StyledCard>
  );
};

const CardTitle = ({ title }) => {
  return <h3 style={{ marginTop: 0 }}>{title}</h3>;
};

const StyledCard = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 16px;
`;

export default Card;
