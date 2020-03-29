import React from "react";

const WordCardContainer = ({ word, loading }) => (
  <>
    {word.map(data => (
      <div key={data}>{data}</div>
      // <div data={data} loading={loading} />
    ))}
  </>
);

export default WordCardContainer;
