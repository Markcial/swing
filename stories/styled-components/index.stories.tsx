import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import { action } from '@storybook/addon-actions';
import Swing, { fade, zoom } from "../..";

export default {
  title: "Styled Components|Scripting",
};

const StyledSpan = Swing(styled.span<{ hovered: boolean }>(
  ({ hovered }) => ({
    display: "inline-block",
    ...zoom(hovered),
  }),
));

export const basic = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <StyledSpan 
      hovered={hovered}
      onMouseOut={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      onTransitionStart={action("animation started")}
      onTransitionEnd={action("animation ended")}
    >Hover me!</StyledSpan>
    );
}

const Component = forwardRef<HTMLDivElement, {}>(
  (_, ref) => <div ref={ref}>Holla!</div>
);
const Foo = Swing(Component);

export const animate = () => {
  return (
    <Foo
      keyframes={[
        { opacity: 0, color: "#fff" },
        { opacity: 1, color: "blue" },
      ]}
      duration={4000}
    />
  );
};

export const glittery = () => {
  return (
    <Foo
      keyframes={[
        { background: "blue" },
        { background: "red" },
        { background: "green" },
        { background: "yellow" },
        { background: "purple" },
        { background: "cyan" },
        { background: "black" },
      ]}
      duration={1000}
      iterations="5"
    />
  );
}


const View = Swing( // wrapping with Swing gives scripting capabilities
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

export const BarSample = () => {
  return <View
    onTransitionStart={() => console.log("i started")} // will run on start
    onTransitionEnd={() => console.log("i just finished")} // will run after transition completed
  />
}