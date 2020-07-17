import React, { useState, forwardRef, MouseEventHandler } from "react";
import { fade } from "../../..";

export default {
  title: "React|Animations/Fade",
};

interface ComponentProps {
  pressed?: boolean;
  onClick?: MouseEventHandler;
}
const Fade = forwardRef<HTMLDivElement, ComponentProps>(
  ({ pressed = false, onClick = () => null }, ref) => (
    <div ref={ref}>
      <p style={fade(pressed)}>Hallo!</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
);
export const simple = () => {
  const [pressed, setPressed] = useState<boolean>(false);
  return <Fade pressed={pressed} onClick={() => setPressed(!pressed)}/>
};

const CustomFade = forwardRef<HTMLDivElement, ComponentProps>(
  ({ pressed = false, onClick = () => null }, ref) => (
    <div ref={ref}>
      <p style={fade(pressed, { to: 0.2 })}>Hallo!</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
);
export const custom = () => {
  const [pressed, setPressed] = useState<boolean>(false);
  return <CustomFade pressed={pressed} onClick={() => setPressed(!pressed)}/>
};
