import * as React from "react";
import * as ReactDOM from "react-dom";
import { fade } from "@markcial/swing";
import Settings from "../Settings";

const App = () => {
  const [hide, setHide] = React.useState(false);
  return (
    <>
      <p style={fade(hide)}>Don't look at me...</p>
      <Settings/>
      <button onClick={() => setHide(!hide)}>Hide</button>
    </>
  );
}

ReactDOM.render(<App/>, document.querySelector("#app"));