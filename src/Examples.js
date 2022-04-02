import React from "react";

export default function Examples(props) {
  if (props.examples.example) {
    return (
      <div className="example">
        <strong>Example: </strong>
        {props.examples.example}
      </div>
    );
  } else {
    return null;
  }
}
