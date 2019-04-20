import React from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";

import Badge from "./Badge";

const ImageCard = ({ alt, src, image, activeFilters }) => {
  return (
    <StyledImageCard>
      <Image src={src} alt={alt} />
      <Box p={2}>
        <Flex>
          {image.labels && (
            <Box>
              {image.labels.map(label => {
                const isActive = activeFilters.includes(label);
                return <Badge key={label} text={label} isActive={isActive} />;
              })}
            </Box>
          )}
        </Flex>
      </Box>
    </StyledImageCard>
  );
};
const Image = ({ alt, src }) => {
  return <StyledImage src={src} alt={alt} />;
};

const StyledImageCard = styled.div`
  background: #282828;
  border-radius: 5px;
  transition: 0.1s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
  object-fit: cover;
`;

export default ImageCard;
