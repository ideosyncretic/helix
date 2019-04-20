import React from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";

const ImageCard = ({ alt, src, image }) => {
  return (
    <StyledImageCard>
      <Image src={src} alt={alt} />
      <Box p={2}>
        <Flex ml={-1} mt={-1}>
          {image.labels && (
            <Box ml={1} mt={1}>
              {image.labels.map(label => {
                return <button key={label}>{label}</button>;
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
  background: #ffffff;
  border-radius: 5px;
`;

const StyledImage = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
  object-fit: cover;
`;

export default ImageCard;