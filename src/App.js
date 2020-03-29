import React, { useState, useEffect } from "react";
import "./App.css";
import "./WordCards";
import axios from "axios";
import EtymomapPresenter from "./Routes/EtymomapPresenter";

// const circleSize = 100;
// const circleSizeRate = 1.7;
// const length = 150;
// const windowW = window.innerWidth / 2;
// const windowH = window.innerHeight / 2;

let keyword = null;

function Wordboard() {
  const [words, setWords] = useState(null);
  // const [wordStyle, setWordStyle] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("T:", searchTerm);
    if (searchTerm !== keyword) {
      setLoading(true);
      setSearchTerm(keyword);
    }
  }

  useEffect(() => {
    searchByTerm(keyword);
    console.log("handle Submit: ", searchTerm);
  }, [searchTerm]);

  function updateTerm(event) {
    // console.log(event.target.value);
    let value = event.target.value;
    keyword = value;
  }
  function clickWordCard(key) {
    keyword = key.word;
    console.log("clickWordCard:", key.word);
    setLoading(true);
    setSearchTerm(key);
  }

  async function searchByTerm(keyword) {
    console.log("Search:" + keyword);
    try {
      await axios
        .get("http://realchord.net/etymo/q2.php?p=" + keyword)
        .then(({ data }) => {
          console.log("axios : ", { data });
          setWords({ data });
        })
        .catch(err => {});
    } catch {
      setError("Can't find information.");
    } finally {
      console.log("finally : ", words);

      searchTerm && setLoading(false);
    }
  }

  // componentWDidnmount() {}

  return (
    <EtymomapPresenter
      words={words}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
      clickWordCard={clickWordCard}
    />
  );
}

export default Wordboard;
