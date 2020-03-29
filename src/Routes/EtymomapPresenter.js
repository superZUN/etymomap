import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

const circleSize = 30;
const circleSizeRate = 5;
const length = 150;
function getX(c, i, center, prevAngle) {
  const angle = prevAngle + ((2 * Math.PI) / c) * i + 0.5 * Math.PI;
  return length * Math.sin(angle) + center;
}
function getY(c, i, center, prevAngle) {
  const angle = prevAngle + ((2 * Math.PI) / c) * i + 0.5 * Math.PI;
  return length * Math.cos(angle) + center;
}

function Welcome(props) {
  const windowW = window.innerWidth / 2;
  const windowH = window.innerHeight / 2;
  console.log("welcome props : ", props);
  const countOfFirstLayer = props.data.data.length - 1;
  const countOfSecondLayerArr = [];
  let arrX = [];
  let arrY = [];

  // let arrLine = [start X(X of origin), start Y(Y of origin), angle, length]
  let arrLineX = [];
  let arrLineY = [];
  let arrLineAngle = [];
  let arrLineLength = [];

  //Root word
  arrX.push(windowW);
  arrY.push(windowH);
  arrLineAngle.push(0);
  arrLineX.push(windowW);
  arrLineY.push(windowH);
  arrLineLength.push(0);
  // stArr.push(NewWordStyle(windowW, windowH, 1));

  //First layer
  for (let i = 0; i < countOfFirstLayer; i++) {
    const x = getX(countOfFirstLayer, i, windowW, 0);
    const y = getY(countOfFirstLayer, i, windowH, 0);
    const layer = 2;
    arrX.push(x);
    arrY.push(y);
    arrLineAngle.push(((2 * Math.PI) / countOfFirstLayer) * i + 0.5 * Math.PI);
    arrLineX.push(windowW);
    arrLineY.push(windowH);
    arrLineLength.push(150);
    // stArr.push(NewWordStyle(x, y, layer));
  }

  //Second layer
  for (let i = 1; i < props.data.data.length; i++) {
    console.log(props.data.data);
    props.data.data[i].shift();
    const x = getX(countOfFirstLayer, i - 1, windowW, 0);
    const y = getY(countOfFirstLayer, i - 1, windowH, 0);
    const prevAngle = ((2 * Math.PI) / countOfFirstLayer) * (i - 1) + Math.PI;
    countOfSecondLayerArr.push(props.data.data[i].length);
    for (let j = 0; j < props.data.data[i].length; j++) {
      const x2 = getX(
        countOfSecondLayerArr[i - 1] + 5,
        j + 3, // + countOfSecondLayerArr[i - 1],
        x,
        prevAngle
      );
      const y2 = getY(
        countOfSecondLayerArr[i - 1] + 5,
        j + 3, // + countOfSecondLayerArr[i - 1],
        y,
        prevAngle
      );
      arrX.push(x2);
      arrY.push(y2);
      console.log("prevAngle:", (prevAngle / Math.PI) * 180);
      console.log("countofsecond:", countOfSecondLayerArr[i - 1]);
      console.log("i:", i);
      console.log("j:", j);
      console.log(
        "angle:",
        ((prevAngle -
          ((2 * Math.PI) / (countOfSecondLayerArr[i - 1] + 5)) * (j + 3) +
          0.5 * Math.PI) *
          180) /
          Math.PI -
          90
      );
      arrLineAngle.push(
        0 -
          prevAngle +
          ((2 * Math.PI) / (countOfSecondLayerArr[i - 1] + 5)) * (j + 3) +
          0.5 * Math.PI
      );
      arrLineX.push(x);
      arrLineY.push(y);
      arrLineLength.push(150);
      // stArr.push(NewWordStyle(x2, y2, 3));
    }
  }
  console.log("arrLineX", arrLineX);

  // check layer inspection
  console.log("here's array X", arrX);
  console.log("here's array Y", arrY);
  console.log("here's radius : ", props.layer);
  console.log("1st layer's count : ", countOfFirstLayer);
  console.log("1st layer's count : ", countOfSecondLayerArr);
  console.log("how long is array ", arrX.length);

  // for (let i = 1; i < arrX.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     console.log(
  //       "x, y" + arrX[i] + "," + arrY[i] + " - " + arrX[j] + "," + arrY[j]
  //     );
  //     console.log(
  //       "Distance(센터부터 잡고 계산할 것!) : ",
  //       getDistance(arrX[i], arrY[i], arrX[j], arrY[j])
  //     );
  //   }
  // }
  function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.abs(x2 - x1) ^ (2 + Math.abs(y2 - y1)) ^ 2);
  }

  function CreateWordCard(props) {
    const word = props.word[0];
    const meanWord = props.word[1];

    let layer = props.layer;
    if (props.id === 0) {
      layer = 0;
    }
    if (layer > 2) layer = 2;
    let x = props.posX;
    let y = props.posY;

    let FontSize = [];
    FontSize = [30, 20, 15, 15, 15, 15, 15];

    const [clicked, setClicked] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    const [style, setStyle] = useSpring(() => ({
      config: config.stiff,
      zIndex: 100,
      opacity: 1,
      left: clicked ? x + 400 : x,
      top: y,
      width: (circleSize / (layer + 1)) * circleSizeRate + "px",
      height: (circleSize / (layer + 1)) * circleSizeRate + "px",
      fontSize: FontSize[layer],
      from: {
        opacity: 0,
        left: window.innerWidth / 2,
        top: window.innerHeight / 2
      }
    }));

    const [lineStyle, setLineStyle] = useSpring(() => ({
      config: config.stiff,
      zIndex: 0,
      left: arrLineX.pop(),
      top: arrLineY.pop(),
      transform:
        "rotateZ(" + ((arrLineAngle.pop() / Math.PI) * 180 - 90) + "deg)",
      width: arrLineLength.pop() + "px",
      height: 100 + "px",
      from: {
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        width: 0 + "px",
        height: 0 + "px"
      }
    }));

    const [meaningStyle, setMeaningStyle] = useSpring(() => ({
      config: config.stiff,
      zIndex: 10000,
      opacity: 0,
      left: x,
      top: y - (circleSize / (layer + 1)) * circleSizeRate,
      fontSize: FontSize[layer],
      from: {
        opacity: 0,
        left: window.innerWidth / 2,
        top: window.innerHeight / 2
      }
    }));

    function click(word) {
      console.log("clicked", word);
      props.clickWordCard(word);
    }

    return (
      <>
        <animated.div
          className={"connectLine"}
          style={lineStyle}
        ></animated.div>
        <animated.div className={"meaning"} style={meaningStyle}>
          {meanWord}
        </animated.div>
        <animated.div
          className={"word circleBase"}
          style={style}
          onClick={() => {
            {
              if (!hasClicked) {
                click({ word });
              }
            }
          }}
          onMouseLeave={event => {
            setMeaningStyle({
              opacity: 0,
              zIndex: 0,
              top: y - (circleSize / (layer + 1)) * circleSizeRate
            });
            setHasClicked(false);
            setClicked(false);
            setStyle({
              config: config.stiff,
              opacity: 1,
              left: x,
              top: y,
              width: (circleSize / (layer + 1)) * circleSizeRate + "px",
              height: (circleSize / (layer + 1)) * circleSizeRate + "px"
            });
          }}
          onMouseDown={event => {
            setClicked(true);
            setStyle({
              opacity: 0.5,
              left: event.clientX,
              top: event.clientY
            });
          }}
          onMouseUp={() => {
            setClicked(false);
            setStyle({
              config: config.stiff,
              left: x,
              top: y,
              opacity: 1
            });
          }}
          onMouseMove={event => {
            if (clicked) {
              setHasClicked(true);
              setMeaningStyle({
                zIndex: 999
              });
              setStyle({
                config: { duration: -1 },
                left: event.clientX,
                top: event.clientY
              });
            }
          }}
          onMouseEnter={() => {
            setMeaningStyle({
              zIndex: 999,
              opacity: 0.8,
              top: y - (circleSize / (layer + 1)) * circleSizeRate
            });
            setStyle({
              opacity: 1,
              width: (circleSize / (layer + 1)) * circleSizeRate * 1.1 + "px",
              height: (circleSize / (layer + 1)) * circleSizeRate * 1.1 + "px"
            });
          }}
          key={word}
        >
          <p>{word}</p>
        </animated.div>
      </>
    );
  }

  let layer = 0;
  let id = 0;

  return (
    <>
      {props.data.data.map(wordPKG => (
        <div className={layer++}>
          {wordPKG.map((word, index) => (
            <>
              <CreateWordCard
                key={word}
                word={word}
                posX={arrX[id]}
                posY={arrY[id]}
                layer={layer}
                id={id++}
                clickWordCard={props.clickWordCard}
              />
            </>
          ))}
        </div>
      ))}
    </>
  );
}

const EtymomapPresenter = ({
  words,
  searchTerm,
  loading,
  handleSubmit,
  updateTerm,
  clickWordCard
}) => (
  <>
    <div>
      <form
        width="100%"
        align="center"
        onSubmit={handleSubmit}
        style={{ position: "absolute", top: "0px", left: "0px" }}
      >
        <input
          placeholder="search"
          className="searchInput"
          // value={searchTerm}
          onChange={updateTerm}
        ></input>
      </form>
    </div>

    {loading ? (
      <>
        <div key="loading">Loading...</div>
      </>
    ) : (
      <Welcome
        key="wordCard"
        data={words}
        loading={loading}
        clickWordCard={clickWordCard}
      />
    )}
  </>
);

export default EtymomapPresenter;
