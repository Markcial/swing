import React, { useState, forwardRef, MouseEventHandler } from "react";
import styled from "styled-components";
import { action } from '@storybook/addon-actions';
import Swing, { fade, slideDown, zoom } from "../../..";

export default {
  title: "Styled Components|Animations/Fade",
};

const FadeableParagrap = styled.p<{ hide: boolean }>(
  ({ hide }) => fade(hide),
);

export const simple = () => {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <div>
      <FadeableParagrap hide={hide}>Hallo!</FadeableParagrap>
      <button onClick={() => setHide(!hide)}>Click me!</button>
    </div>
  );
}

const CustomFadeableParagrap = styled.p<{ hide: boolean }>(
  ({ hide }) => fade(hide, { to: 0.2 }),
);

export const custom = () => {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <div>
      <CustomFadeableParagrap hide={hide}>Hallo!</CustomFadeableParagrap>
      <button onClick={() => setHide(!hide)}>Click me!</button>
    </div>
  );
}