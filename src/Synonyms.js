import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  //console.log(props.synonyms);
  if (props.synonyms) {
    return "Synonyms";
  } else {
    return null;
  }
}
