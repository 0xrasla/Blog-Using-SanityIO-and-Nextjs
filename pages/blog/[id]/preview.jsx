import React from "react";
import Markdown from "marked-react";
import Image from "next/image";

const Preview = ({ title, author, image, markdown }) => {
  return (
    <div>
      <h3>Working</h3>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <Image src={image} alt="" />
      <Markdown source={markdown} />
    </div>
  );
};

export default Preview;
