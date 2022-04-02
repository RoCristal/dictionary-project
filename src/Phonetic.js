import React from "react";
import "./Phonetic.css";
import { BsFileMusic } from "react-icons/bs";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.phonetics[0].audio);

  function click() {
    audio.play();
  }

  if (props.phonetic.phonetics[0].audio && props.phonetic.phonetics[0].text) {
    return (
      <div className="Phonetic">
        <button type="button" className="btn phonetic-button" onClick={click}>
          <BsFileMusic />
        </button>
        <span className="Phonetic text">
          {props.phonetic.phonetics[0].text}
        </span>
      </div>
    );
  } else if (props.phonetic.phonetics[0].audio) {
    return (
      <div className="Phonetic">
        <button type="button" className="btn phonetic-button" onClick={click}>
          <BsFileMusic />
        </button>
      </div>
    );
  } else if (props.phonetic.phonetic) {
    return <span className="Phonetic text">{props.phonetic.phonetic}</span>;
  } else {
    return null;
  }
}
