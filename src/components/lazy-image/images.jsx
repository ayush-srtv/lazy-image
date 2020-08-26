import React from "react";
import Image from "./image";
import Picture from "./picture";

function LazyImage({ component: Component = "img", ...props }) {
  const isPicture = Component === "picture";
  return isPicture ? <Picture {...props} /> : <Image {...props} />;
}

export default LazyImage;
