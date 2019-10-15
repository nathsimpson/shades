/** @jsx jsx */
import { jsx } from "@emotion/core";

const Button = ({ label, onClick }) => (
  <button
    onClick={onClick}
    css={{
      padding: "6px 12px",
      borderRadius: 6,
      backgroundColor: colors["3"],
      color: "#fcfcfd",
      border: "none",
      margin: "0px 2px",

      "&:hover": {
        backgroundColor: colors["5"]
      },

      "&:focus": { outline: "none" }
    }}
  >
    {label}
  </button>
);

export default Button;

const colors = {
  "0": "#090d11",
  "1": "#151f29",
  "2": "#203040",
  "3": "#2c4258",
  "4": "#385470",
  "5": "#436384",
  "6": "#4f759c",
  "7": "#6087af"
};
