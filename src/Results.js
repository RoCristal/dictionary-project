import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <div className="meaning">
          <h2>
            <strong>{props.data.word}</strong>
          </h2>

          <span className="phonetic">
            <Phonetic phonetic={props.data} />
          </span>

          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
