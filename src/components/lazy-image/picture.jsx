import React from "react";

function Picture({ sources, ...props }) {
  return (
    <picture {...props}>
      {sources.map(({ type: Source = "source", ...rest }) => (
        <Source {...rest} />
      ))}
    </picture>
  );
}

export default Picture;
