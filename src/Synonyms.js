import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.lenght <= 1) {
    return null;
  } else {
    return (
      <div>
        {props.synonyms.map(function (synonym, index) {
          if (index < 3) {
            return (
              <span className="synonym" key={index}>
                {" "}
                {synonym}{" "}
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}
