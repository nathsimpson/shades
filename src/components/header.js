import React from "react";
import AddColor from "./addColor";

const ToolBar = ({ colors, setColors, bound, setBound }) => {
  const [newColor, setNewColor] = React.useState("#ff0000");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 12,
        boxSizing: "border-box"
        // backgroundColor: "#fa6d01"
      }}
    >
      <p>
        <span role="img" aria-label="Face with sunglasses">
          😎
        </span>{" "}
        Shades
      </p>

      <AddColor {...{ setColors, colors, setNewColor, newColor }} />
    </div>
  );
};

export default ToolBar;
