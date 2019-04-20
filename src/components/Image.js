import React, { Component } from "react";
import axios from "axios";
import ImageCard from "./layout/ImageCard";

export default class Image extends Component {
  componentDidMount = () => {
    const { image } = this.props;
    // get data if image doesn't have annotation data yet
    if (image.labels.length < 1) {
      this.getImageLabels();
    }
  };

  getImageLabels = () => {
    const baseURL = "https://vision.googleapis.com/v1/images:annotate";
    const key = process.env.REACT_APP_GOOGLE_VISION_API_KEY;
    const { image, handleUpdateAllLabels, handleUpdateImages } = this.props;

    axios({
      method: "post",
      url: `${baseURL}?key=${key}`,
      data: {
        requests: [
          {
            image: {
              source: {
                imageUri: `gs://${image.imageFile}`,
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
        const labels = labelAnnotations.map(labelAnnotation => {
          return labelAnnotation.description;
        });

        // console.log("labels", labels);

        handleUpdateImages(image.imageFile, labels);
        handleUpdateAllLabels(labels);
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
    const { image, images } = this.props;
    const baseURL = "https://storage.googleapis.com​";

    return (
      <ImageCard
        src={`${baseURL}/${image.imageFile}`}
        alt={image.imageFile}
        images={images}
        image={image}
      />
    );
  }
}
