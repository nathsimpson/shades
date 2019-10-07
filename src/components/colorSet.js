import React from "react";
import Slider from "./slider";

import { generateColorPack, getWcagColor } from "../utils";

const ColorSet = ({ base }) => {
  const [shades, setShades] = React.useState(11);
  const [bound, setBound] = React.useState(10);

  const colors = generateColorPack(base, shades, bound);

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
      <ToolBar {...{ base, colors, shades, setShades, bound, setBound }} />
    </div>
  );
};

const ToolBar = ({ base, colors, shades, setShades, bound, setBound }) => (
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
        colors={colors}
        label="Amount"
        value={shades}
        set={setShades}
        max={50}
        step={2}
      />
      <Slider colors={colors} label="Difference" value={bound} set={setBound} />
    </div>

    <div>
      <span>{`Darkest: ${colors[0]}`}</span>{" "}
      <span>{`Lightest: ${colors[colors.length - 1]}`} </span>{" "}
      <button>Copy JSON</button>
      <button>Delete</button>
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
