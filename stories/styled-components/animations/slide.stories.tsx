import React, { useState, forwardRef, MouseEventHandler } from "react";
import styled from "styled-components";
import { action } from '@storybook/addon-actions';
import { fade, slideDown, zoom } from "../../..";

export default {
  title: "Styled Components|Animations/Slide",
};

const SlideParagrap = styled.p<{ hide: boolean}>(
  ({ hide }) => ({
    ...slideDown(hide),
    display: "inline-block",
  })
);

export const slideFunction = () => {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <div>
      <SlideParagrap hide={hide}>Press the button to hide me!</SlideParagrap>
      <button onClick={() => setHide(true)}>press me</button>
    </div>
  );
}