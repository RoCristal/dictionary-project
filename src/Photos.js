import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          <div className="col ">
            {" "}
            {props.photos.map(function (photo, index) {
              return (
                <img
                  src={photo.src.tiny}
                  key={index}
                  alt="graphic description"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
