import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsKey = `563492ad6f91700001000001172fb845e28d410db987822a67b91cc9`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=nature&per_page=1`;
    axios.get(pexelsUrl).then(handlePexelResponse);
  }

  function wordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={wordChange}
          className="rounded"
          placeholder="Search for a word"
        />
      </form>
      <Results data={results} />
    </div>
  );
}
