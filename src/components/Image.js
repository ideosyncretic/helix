import React, { Component } from "react";
import axios from "axios";
import ImageCard from "./layout/ImageCard";

export default class Image extends Component {
  componentDidMount = () => {
    const { images, imageFile } = this.props;
    // get data if image doesn't have annotation data yet
    if (images[imageFile].labels.length < 1) {
      this.getImageLabels();
    }
  };

  getImageLabels = () => {
    const baseURL = "https://vision.googleapis.com/v1/images:annotate";
    const key = process.env.REACT_APP_GOOGLE_VISION_API_KEY;
    const { imageFile, handleUpdateAllLabels, handleUpdateImages } = this.props;

    axios({
      method: "post",
      url: `${baseURL}?key=${key}`,
      data: {
        requests: [
          {
            image: {
              source: {
                imageUri: `gs://${imageFile}`,
              },
            },
            features: [
              {
                type: "LABEL_DETECTION",
                maxResults: 5,
              },
            ],
          },
        ],
      },
    })
      .then(function(response) {
        // handle success
        const result = response.data.responses[0];
        const { labelAnnotations } = result;
        const imageLabels = labelAnnotations.map(labelAnnotation => {
          return labelAnnotation.description;
        });

        // console.log("imageLabels", imageLabels);

        handleUpdateImages(imageFile, imageLabels);
        handleUpdateAllLabels(imageLabels);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };

  render() {
    const { imageFile, images } = this.props;
    const baseURL = "https://storage.googleapis.com​";

    return (
      <ImageCard
        src={`${baseURL}/${imageFile}`}
        alt={imageFile}
        images={images}
        imageFile={imageFile}
      />
    );
  }
}
