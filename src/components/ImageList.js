import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid";

import Card from "./layout/Card";
import data from "../data/data";
import Image from "./Image";
import isImageFile from "../utils/images";

let images = {};
data.imageFiles.forEach(imageFile => {
  // check if valid image file
  if (isImageFile(imageFile)) {
    images[imageFile] = {
      imageFile,
      labels: [],
    };
  }
});

class ImageList extends Component {
  state = {
    images,
  };

  handleUpdateImages = (imageFile, labels) => {
    const { images } = this.state;
    const { annotatedCount, handleUpdateAnnotatedCount } = this.props;

    const updatedAnnotatedCount = annotatedCount + 1;
    const isLoading = updatedAnnotatedCount !== Object.keys(images).length;
    handleUpdateAnnotatedCount(updatedAnnotatedCount, isLoading);

    this.setState({
      images: {
        ...images,
        [imageFile]: {
          imageFile,
          labels,
        },
      },
    });
  };

  render() {
    const { images } = this.state;
    const {
      activeMatchMode,
      activeFilters,
      annotatedCount,
      handleUpdateAllLabels,
    } = this.props;

    const totalImages = Object.keys(images).length;

    if (images) {
      return (
        <React.Fragment>
          <Box mb={2}>
            <Card
              intent={annotatedCount === totalImages ? "success" : "warning"}
            >
              {annotatedCount < totalImages &&
                `Annotating images ${annotatedCount}/${totalImages}`}
              {annotatedCount === totalImages && `Annotation complete!`}
            </Card>
          </Box>
          <Flex flexWrap="wrap" flexDirection="row" ml={-2} mt={-2}>
            {Object.keys(images).map(imageFile => {
              let shouldShowImage = true;
              const image = images[imageFile];

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
        </React.Fragment>
      );
    }
    return <Card>No images found</Card>;
  }
}

export default ImageList;
