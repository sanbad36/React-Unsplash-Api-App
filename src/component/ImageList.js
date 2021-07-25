import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = (props) => {
  const image = props.images.map((image) => {
    return <ImageCard Key={image.id} image={image} />;
  });

  console.log(image);
  return <div className="image-list">{image}</div>;
};
export default ImageList;
