import React from "react";
import "./Phonetic.css";
import { ImMusic } from "react-icons/im";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.phonetics[0].audio);

  function click() {
    audio.play();
  }

  if (props.phonetic.phonetics[0].audio && props.phonetic.phonetics[0].text) {
    return (
      <div className="phonetic">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn phonetic-sound"
              onClick={click}
            >
              <span className="playMe">Play me! </span>
              <ImMusic className="icon" />
            </button>
          </div>
          <div className="col phoneticText">
            <span>Phonetics: {props.phonetic.phonetics[0].text}</span>
          </div>
        </div>
      </div>
    );
  } else if (props.phonetic.phonetics[0].audio) {
    return (
      <div className="phonetic">
        <button type="button" className="btn phonetic-sound" onClick={click}>
          <span className="playMe">Play me! </span> <ImMusic className="icon" />
        </button>
      </div>
    );
  } else if (props.phonetic.phonetic) {
    return (
      <span className="phoneticText">Phonetics: {props.phonetic.phonetic}</span>
    );
  } else {
    return null;
  }
}
