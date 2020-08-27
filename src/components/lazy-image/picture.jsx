import React, { useState, useEffect } from "react";

function Picture({ sources, ...props }) {
  const [images, setImages] = useState([]);
  const [observers, setObservers] = useState([]);
  const [imagesRefs, setImagesRefs] = useState([]);
  useEffect(() => {}, [imagesRefs, images]);
  const handleImageRef = (ref, index) => {
    const refs = [...imagesRefs];
    refs[index] = ref;
    setImagesRefs(refs);
  };

  return (
    <picture {...props}>
      {sources.map(({ type: Source = "source", ...rest }, index) => (
        <Source {...rest} ref={(ref) => handleImageRef(ref, index)} />
      ))}
    </picture>
  );
}

export default Picture;
