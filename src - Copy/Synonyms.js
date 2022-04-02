import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.lenght < 0) {
    return null;
  } else {
    return (
      <div>
        <span>
          <strong>Synonym: </strong>
        </span>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}> {synonym} </span>;
        })}
      </div>
    );
  }
}
