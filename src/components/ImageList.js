import React from "react";
import { Flex, Box } from "@rebass/grid";

import data from "../data/data";
import ImageCard from "./ImageCard";
import isImageFile from "../utils/images";
import { Card } from "@shopify/polaris";

const baseURL = "https://storage.googleapis.com​";

const ImageList = () => {
  return (
    <Card>
      <Flex flexWrap="wrap" flexDirection="row">
        {data.imageFiles.map(imageURL => {
          return (
            isImageFile(imageURL) && (
              <Box width={[1 / 3]} key={imageURL}>
                <ImageCard url={`${baseURL}/${imageURL}`} />
              </Box>
            )
          );
        })}
      </Flex>
    </Card>
  );
};

export default ImageList;
