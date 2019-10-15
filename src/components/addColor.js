/** @jsx jsx */
import { jsx } from "@emotion/core";
import Button from "./button";

const AddColor = ({ setColors, colors, newColor, setNewColor }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <label>Choose color:</label>
    <input
      type="color"
      placeholder="Add Color"
      value={newColor}
      onChange={({ target: { value: newColor } }) => setNewColor(newColor)}
      css={{
        margin: "0 6px",
        padding: 0,
        background: "none",
        outline: "none",
        border: "2px solid white",
        height: 30,
        width: 30,
        borderRadius: 30,

        "::-webkit-color-swatch-wrapper": {
          background: "none",
          padding: 0,
          height: 30,
          width: 30
        },

        "::-webkit-color-swatch:hover": {
          opacity: 0.5
        },

        "::-webkit-color-swatch": {
          border: "none",
          background: "none",
          padding: 0,
          height: 30,
          width: 30,
          borderRadius: 15
        }
      }}
    />
    <Button onClick={() => setColors(colors.concat([newColor]))} label="Add" />
  </div>
);

export default AddColor;
