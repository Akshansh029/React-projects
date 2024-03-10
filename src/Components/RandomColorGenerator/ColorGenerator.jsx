import React, { useState } from "react";
import "./colorGenerator.css";

const ColorGenerator = () => {
  const [color, setColor] = useState("#294B42");
  const [hexColor, setHexColor] = useState(true);
  const [rgbColor, setRgbColor] = useState(false);
  const hexArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  function getRandomHexColor() {
    let prevColor = "#";
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hexArray.length);
      prevColor += hexArray[random];
    }
    // console.log(prevColor);
    setColor(prevColor);
    document.querySelector("body").style.backgroundColor = prevColor;
  }
  function getRandomRgbColor() {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);

    // console.log(R);
    // console.log(G);
    // console.log(B);
    let prevColor = `rgb(${R},${G},${B})`;
    setColor(prevColor);
    document.querySelector("body").style.backgroundColor = prevColor;
  }
  return (
    <div className="container">
      <div className="buttons">
        <button
          onClick={() => {
            setHexColor(true), setRgbColor(false);
          }}
        >
          Generate HEX color
        </button>
        <button
          onClick={() => {
            setHexColor(false), setRgbColor(true);
          }}
        >
          Generate RGB color
        </button>
        <button onClick={hexColor ? getRandomHexColor : getRandomRgbColor}>
          Generate random color
        </button>
      </div>
      <h1>{hexColor ? "HEX COLOR" : "RGB COLOR"}</h1>
      <h1>{color}</h1>
    </div>
  );
};

export default ColorGenerator;
