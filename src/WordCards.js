import React from "react";
import { useSpring, animated } from "react-spring";

const circleSize = 100;
const circleSizeRate = 1.7;

class Wordcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      styleName: null,
      posX: null,
      posY: null
    };
  }
  componentDidMount() {
    // console.log(this.state.name);
    this.setState((state, props) => ({
      name: props.name,
      styleName: props.styleName,
      posX: props.posX,
      posY: props.posY
    }));
    // this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <>
        <div>
          <animated.div
            className={this.state.name + " word circleBase"}
            style={this.state.styleName}
          >
            <p>{this.state.name}</p>
            {/* It is {this.state.date.toLocaleTimeString()}. */}
          </animated.div>
        </div>
        <animated.div className="line"> </animated.div>
      </>
    );
  }
}

function NewWordStyle(x, y, layer) {
  let FontSize = [];
  FontSize = [30, 20, 15, 15];

  const style = useSpring({
    opacity: 0.7,
    left: x,
    top: y,
    width: (circleSize / (layer + 1)) * circleSizeRate + "px",
    height: (circleSize / (layer + 1)) * circleSizeRate + "px",
    fontSize: FontSize[layer],
    from: {
      opacity: 0,
      left: window.innerWidth / 2,
      top: window.innerHeight / 2
    }
  });
  return style;
}

function WordcardSophie() {
  const stArray = [];
  const layerCount = [3, 3, 4, 3];
  /* root + layer1 + layer2-1
        |        + layer2-2
        |        + layer2-3
        + layer2 + layer2-1
        |        + layer2-2
        |        + layer2-3
        |        + layer2-4
        + layer3 + layer3-1
                   layer3-2
                   layer3-3

*/

  const length = 150;
  const windowW = window.innerWidth / 2;
  const windowH = window.innerHeight / 2;
  let data = [
    [0, "sophie", 1, 100, 100, null],
    [1, "jun", 2, 200, 200, null],
    [2, "Jiwoo", 2, 300, 300, null],
    [3, "Tory", 2, 400, 400, null]
  ];

  stArray.push(NewWordStyle(windowW, windowH, 1));
  for (let i = 0; i < layerCount[0]; i++) {
    stArray.push(
      NewWordStyle(
        length * Math.sin(((2 * Math.PI) / 3) * i) + windowW,
        length * Math.cos(((2 * Math.PI) / 3) * i) + windowH,
        data[i + 1][2]
      )
    );
  }
  stArray.reverse();

  data.map(word => (word[5] = stArray.pop()));

  return (
    <>
      {data.map(word => (
        <Wordcard
          name={word[1]}
          refer={word[2]}
          styleName={word[5]}
          posX={word[3]}
          posY={word[4]}
        />
      ))}
    </>
  );
}

export default WordcardSophie;
