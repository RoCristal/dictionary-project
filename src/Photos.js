import React from "react";

export default function Photos(props) {
  console.log(props);
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.tiny} key={index} alt="dogs" />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
