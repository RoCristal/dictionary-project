import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        if (index < 2) {
          return (
            <div key={index} className="definitions">
              <strong>Definition: </strong>
              {definition.definition}
              <div className="examples">
                <Examples examples={definition} />
              </div>
              <div className="synonyms">
                <Synonyms synonyms={props.meaning.synonyms} />
              </div>

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
