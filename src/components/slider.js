import React from "react";

const Slider = ({ name, set, value, step = 1, max = 100 }) => (
  <div style={{ display: "flex" }}>
    <p style={{ margin: 0 }}>{name}</p>

    <input
      type="range"
      name="points"
      step={step}
      min={3}
      max={max}
      value={value}
      onChange={({ target: { value } }) => set(value)}
    />
    <p style={{ color: "white", margin: 0 }}>{value}</p>
  </div>
);

export default Slider;
