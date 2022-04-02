import React from "react";
import "./Phonetic.css";
import { BsFileMusic } from "react-icons/bs";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }

  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button
          type="button"
          className="btn phonetic-button"
          onClick={handleClick}
        >
          <BsFileMusic />
        </button>
        <span className="Phonetic text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
