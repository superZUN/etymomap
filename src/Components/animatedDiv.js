import React, { Component } from "react";
import { useSpring, animated } from "react-spring";

import "./App.css";

function Word() {
  const props = useSpring({
    left: 100,
    top: 100,
    opacity: 1,
    from: { left: 0, position: "absolute", opacity: 0 }
  });
  return <animated.div style={props}>Intercontinental</animated.div>;
}

export default () => {
  Word();
};

/*
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-top: 20px;
`;

export default () => (
  <Container>
    {" "}
    <span role="img" aria-label="loading">
      loading
    </span>
  </Container>
);

*/
