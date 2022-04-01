import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definitions">
            <p>{definition.definition}</p>
            <p>{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
