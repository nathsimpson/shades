/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import AddColor from "./addColor";

const ToolBar = ({ colors, setColors, bound, setBound }) => {
  const [newColor, setNewColor] = useState("#ff0000");

  return (
    <div
      css={{
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
      <p css={{ fontSize: 24, margin: 0 }}>
        <span role="img" aria-label="Face with sunglasses">
          😎
        </span>{" "}
        <span>Shades. </span>
        <span
          css={{
            color: "#5982ab",
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 1
          }}
        >
          A project by{" "}
          <a
            css={{ color: "#5982ab", "&:hover": { color: "#fa6d01" } }}
            href="https://www.nathansimpson.design"
          >
            Nathan Simpson
          </a>
        </span>
      </p>

      <AddColor {...{ setColors, colors, setNewColor, newColor }} />
    </div>
  );
};

export default ToolBar;
