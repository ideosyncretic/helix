import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid";

import Card from "./layout/Card";
import data from "../data/data";
import Image from "./Image";
import isImageFile from "../utils/images";

let images = {};
data.imageFiles.forEach(imageFile => {
  images[imageFile] = {
    imageFile,
    labels: [],
  };
});

class ImageList extends Component {
  state = {
    images,
  };

  handleUpdateImages = (imageFile, imageLabels) => {
    // console.log("handleUpdateImages - imageLabels:", imageLabels);
    const { images } = this.state;
    this.setState({
      images: {
        ...images,
        [imageFile]: {
          imageFile,
          labels: imageLabels,
        },
      },
    });
  };

  render() {
    const { images } = this.state;
    const { activeFilters, handleUpdateAllLabels } = this.props;

    if (images) {
      const isFilterMatch = label => {
        if (activeFilters && label) {
          return activeFilters.includes(label);
        }
        return false;
      };

      return (
        <Flex flexWrap="wrap" flexDirection="row" ml={-2} mt={-2}>
          {Object.keys(images).map(image => {
            let shouldShowImage = true;

            if (activeFilters && activeFilters.length > 0) {
              shouldShowImage =
                isImageFile(images[image].imageFile) &&
                images[image].labels.some(isFilterMatch);
            } else {
              shouldShowImage = isImageFile(images[image].imageFile);
            }

            return (
              shouldShowImage && (
                <Box ml={2} mt={2} key={images[image].imageFile} width={273}>
                  <Image
                    imageFile={images[image].imageFile}
                    handleUpdateAllLabels={handleUpdateAllLabels}
                    handleUpdateImages={this.handleUpdateImages}
                    activeFilters={activeFilters}
                    images={images}
                  />
                </Box>
              )
            );
          })}
        </Flex>
      );
    }
    return <Card>No images found</Card>;
  }
}

export default ImageList;
