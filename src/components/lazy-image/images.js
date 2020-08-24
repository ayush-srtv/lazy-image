import React, { useState, useEffect } from "react";

function LazyImage({ component: Component = "img", sources, ...props }) {
  const isImage = Component === "img";
  const [imageRefs, setImageRefs] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {}, []);

  const componentProps = {
    ...(isImage ? { ref: setImageRefs } : {}),
    ...props
  };

  return (
    <Component {...componentProps}>
      {Component === "picture" &&
        sources.map(({ type: Source = "source", ...rest }) => (
          <Source {...rest} />
        ))}
    </Component>
  );
}

export default LazyImage;
