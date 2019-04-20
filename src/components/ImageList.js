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

  handleUpdateImages = (imageFile, labels) => {
    this.setState({
      images: {
        ...this.state.images,
        [imageFile]: {
          imageFile,
          labels,
        },
      },
    });
  };

  render() {
    console.log("ImageList render!");
    const { images } = this.state;
    const {
      activeFilters,
      activeMatchMode,
      handleUpdateAllLabels,
    } = this.props;

    if (images) {
      return (
        <Flex flexWrap="wrap" flexDirection="row" ml={-2} mt={-2}>
          {Object.keys(images).map(imageFile => {
            let shouldShowImage = true;
            const image = images[imageFile];

            // check for valid image
            if (isImageFile(image.imageFile)) {
              if (activeFilters && activeFilters.length > 0) {
                if (activeMatchMode === "any") {
                  // show if any filters match image labels
                  shouldShowImage = image.labels.some(label =>
                    activeFilters.includes(label),
                  );
                }
                if (activeMatchMode === "all") {
                  // check if every filter matches image labels
                  shouldShowImage = activeFilters.every(filter =>
                    image.labels.includes(filter),
                  );
                }
              }
            } else {
              shouldShowImage = false;
            }

            return (
              shouldShowImage && (
                <Box ml={2} mt={2} key={image.imageFile} width={273}>
                  <Image
                    image={image}
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
