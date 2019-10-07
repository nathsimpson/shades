import React from "react";

import Header from "./components/header";
import ColorSet from "./components/colorSet";

const App = () => {
  const [colors, setColors] = React.useState(["#fa6d01", "#203040"]);

  return (
    <Container>
      <Header {...{ colors, setColors }} />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          width: "100%",
          alignItems: "stretch"
        }}
      >
        {colors.map(color => (
          <ColorSet base={color} {...{ colors, setColors }} />
        ))}
      </div>

      {/* <p style={{ fontSize: 12 }}>{JSON.stringify({ ...oranges })}</p> */}
    </Container>
  );
};

const Container = ({ children }) => (
  <div
    style={{
      fontFamily: "Helvetica, sans-serif",
      backgroundColor: "#203040",
      color: "#e7edf3",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {children}
  </div>
);

export default App;