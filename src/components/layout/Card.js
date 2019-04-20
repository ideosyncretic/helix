import React from "react";
import styled from "styled-components";

const Card = ({ classNames, children, title }) => {
  return (
    <StyledCard classNames={classNames}>
      {title && <CardTitle title={title} />}
      {children}
    </StyledCard>
  );
};

const CardTitle = ({ title }) => {
  return <h3 style={{ marginTop: 0 }}>{title}</h3>;
};

const StyledCard = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 16px;
`;

export default Card;
