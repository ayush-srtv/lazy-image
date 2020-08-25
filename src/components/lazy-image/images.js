import React, { useState, useEffect } from "react";

function LazyImage({ component: Component = "img", sources, ...props }) {
  const isPicture = Component === "picture";
  const [imageRefs, setImageRefs] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {}, []);

  const componentProps = {
    ...(!isPicture ? { ref: setImageRefs } : {}),
    ...props
  };

  return (
    <Component {...componentProps}>
      {isPicture &&
        sources.map(({ type: Source = "source", ...rest }) => (
          <Source {...rest} />
        ))}
    </Component>
  );
}

export default LazyImage;
