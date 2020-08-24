import React, { useState, useEffect } from "react";

function LazyImage({ component: Component = "img", sources, ...props }) {
  const [imageRef, setImageRef] = useState([]);

  const componentProps = {
    ref: setImageRef,
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
