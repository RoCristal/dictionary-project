import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <ul>
        <strong>Synonyms: </strong>
        {props.synonyms}
      </ul>
    );
  } else {
    return null;
  }
}
