import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  //console.log(props.meaning.synonyms);
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index} className="definitions">
              <strong>Definition: </strong>
              {definition.definition}
              <Examples examples={definition} />
              <Synonyms synonyms={props.meaning.synonyms} />
              <br />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
