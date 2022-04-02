import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <div className="meaning">
          <h2>
            <strong>{props.data.word}:</strong>
          </h2>
          {/*<h3>{props.data.meanings[0].definitions[0].definition}</h3>*/}
          <h4>
            {props.data.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </h4>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
