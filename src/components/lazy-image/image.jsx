import React, { useState, useEffect } from "react";

const generatePlaceholder = ({
  color = "#f7f7f7",
  height = 100,
  width = 100
}) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = "100";
  canvas.width = "200";
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL();
};

const Image = ({ src, lqip, alt = "", placeHolder = {}, ...props }) => {
  const [imageSrc, setImageSrc] = useState(
    lqip || generatePlaceholder(placeHolder)
  );
  const [imageRef, setImageRef] = useState();

  const onLoad = (event) => {
    event.target.classList.add("loaded");
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%"
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);
  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      {...props}
    />
  );
};

export default Image;
