import React from "react";
import Slider from "./slider";

import { generateColorPack, getWcagColor } from "../utils";

const ColorSet = ({ base, setColors, colors: rootColors }) => {
  const [shades, setShades] = React.useState(11);
  const [bound, setBound] = React.useState(10);

  const colors = generateColorPack(base, shades, bound);

  const removeColor = () => {
    const newColors = rootColors.filter(col => col !== base);
    return setColors(newColors);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        flexDirection: "column",
        // flexWrap: "wrap",
        alignItems: "stretch"
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          flexDirection: "row",
          // flexWrap: "wrap",
          alignItems: "stretch"
        }}
      >
        {colors.map(shade => (
          <ColorSquare color={shade} />
        ))}
      </div>
      <ToolBar
        onDelete={removeColor}
        {...{ base, colors, shades, setShades, bound, setBound }}
      />
    </div>
  );
};

const ToolBar = ({
  base,
  colors,
  shades,
  setShades,
  bound,
  setBound,
  onDelete
}) => (
  <div
    style={{
      color: getWcagColor(base),
      display: "flex",
      padding: 12,
      backgroundColor: base,
      flexDirection: "row",
      justifyContent: "space-between"
    }}
  >
    <div style={{ display: "flex" }}>
      <Slider
        base={base}
        colors={colors}
        label="Amount"
        max={50}
        set={setShades}
        step={2}
        value={shades}
      />
      <Slider
        base={base}
        colors={colors}
        label="Difference"
        set={setBound}
        value={bound}
      />
    </div>

    <div>
      <span
        style={{
          padding: 4,
          backgroundColor: colors[0],
          color: getWcagColor(colors[0])
        }}
      >{`Darkest: ${colors[0]}`}</span>{" "}
      <span
        style={{
          padding: 4,
          backgroundColor: colors[colors.length - 1],
          color: getWcagColor(colors[colors.length - 1])
        }}
      >
        {`Lightest: ${colors[colors.length - 1]}`}{" "}
      </span>{" "}
      <button>Copy JSON</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  </div>
);

const ColorSquare = ({ color }) => (
  <div
    style={{
      display: "flex",
      width: "100%",
      flex: 1,
      // minWidth: 60,
      // minHeight: 60,
      backgroundColor: color
    }}
  />
);

export default ColorSet;
