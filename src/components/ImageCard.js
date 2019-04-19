import React from "react";
import { Card } from "@shopify/polaris";

const ImageCard = ({ url }) => (
  <Card>
    <img src={url} alt={url} height="400px" />
  </Card>
);

export default ImageCard;
