import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsKey = `563492ad6f91700001000001172fb845e28d410db987822a67b91cc9`;
    const headers = { Authorization: `Bearer ${pexelsKey}` };
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelResponse);
  }

  function wordChange(event) {
    setKeyword(event.target.value);
  }

  if (results) {
    return (
      <div className="dictionary">
        <form onSubmit={search}>
          <input
            type="search"
            onChange={wordChange}
            className="searchField"
            placeholder=" Search for a word"
          />
        </form>
        <Results data={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    return (
      <div className="dictionary">
        <form onSubmit={search}>
          <input
            type="search"
            onChange={wordChange}
            className="searchField"
            placeholder=" Search for a word"
          />
          <button type="button" className="btn" onClick={search}>Search</button>
        </form>
        <Photos photos={photos} />
      </div>
    );
  }
}
