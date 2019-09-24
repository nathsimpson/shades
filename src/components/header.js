import React from "react";

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
      <p>ColorPacks</p>

      <div>
        <input
          type="color"
          placeholder="Add Color"
          value={newColor}
          onChange={({ target: { value: newColor } }) => setNewColor(newColor)}
        />
        <button
          onClick={() => {
            console.log(newColor);
            return setColors(colors.concat([newColor]));
          }}
        >
          Add!
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
