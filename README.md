# Swing

## Css in JS animation library for React

A CSS in JS animation library, works on top of React or any library that uses React.

## Examples

### React

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { fade } from "swing"; // import animation function

const App = () => {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <button
      onMouseOver={() => setHide(true)}
      onMouseOut={() => setHide(false)}
      style={fade(hide)} // use it on style attr
    >
    Don't look at me...
  </button>
  );
}

ReactDOM.render(<App/>, document.querySelector("#app"));
```

### Styled Components

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components"; 
import { fade } from "swing"; // import animation function

const Button = styled.button<{ hovered: boolean }>(
  ({ hovered }) => fade(hovered) // use it on css template function
);

const App = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <Button
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      hovered={hovered}
    >
    Don't look at me...
  </Button>
  );
}

ReactDOM.render(<App/>, document.querySelector("#app"));
```


### Scripting

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components"; 
import Swing, { fade } from "swing"; // import helper and animation function

const App = Swing( // wrapping with Swing gives scripting capabilities
  forwardRef<HTMLDivElement, any>(
    (_, ref) => {
      const [checked, setChecked] = useState(false);
      return (
        <div ref={ref}>
          <span style={fade(checked)}>I don't want to fade away...</span>
          <button onClick={() => setChecked(!checked)}>Click me!</button>
        </div>
      );
    },
  ),
);

ReactDOM.render(
  <App
    onTransitionStart={() => console.log("transition started")} // will be called every time fade starts
    onTransitionEnd={() => console.log("transition ended")} // will be called every time fade ends
  />,
  document.querySelector("#app")
);
```