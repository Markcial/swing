import * as React from "react";
import { TimingFn } from "./transitions";
export * from "./transitions";

type TransitionFn = (evt: TransitionEvent, ref: HTMLElement) => void;
// type AnimationFn = (evt: AnimationPlaybackEvent, ref: HTMLElement) => void;
interface MProps extends Partial<KeyframeAnimationOptions> {
  onTransitionStart?: TransitionFn;
  onTransitionRun?: TransitionFn;
  onTransitionEnd?: TransitionFn;
  // onAnimationStart?: AnimationFn; TODO: Add animation scripting support
  // onAnimationEnd?: AnimationFn; TODO: Add animation scripting support
  keyframes?: Keyframe[];
}
export default (View: React.ComponentPropsWithRef<React.ElementType>): React.FC<(typeof View)["props"] & MProps> => (
  ({
    onTransitionStart = () => null,
    onTransitionEnd = () => null,
    onTransitionRun = () => null,
    onAnimationEnd = () => null,
    keyframes,
    delay = 0,
    direction = "normal",
    duration = 1200,
    easing = TimingFn.Linear,
    endDelay = 0,
    fill = "none",
    iterationStart = 0,
    iterations = 1,
    ...props
  }) => {
    const ref = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
      const { current } = ref;
      current?.addEventListener("transitionstart", (evt: any) => onTransitionStart(evt, current));
      current?.addEventListener("transitionrun", (evt: any) => onTransitionRun(evt, current));
      current?.addEventListener("transitionend", (evt: any) => onTransitionEnd(evt, current));
      if (keyframes) {
        current?.animate(keyframes, { delay, direction, duration, easing, endDelay, fill, iterationStart, iterations });
        // TODO: add animation scripting support
      }
      return () => {
        current?.removeEventListener("transitionstart", (evt: any) => onTransitionStart(evt, current));
        current?.removeEventListener("transitionrun", (evt: any) => onTransitionRun(evt, current));
        current?.removeEventListener("transitionend", (evt: any) => onTransitionEnd(evt, current));
      }
    }, [ref]);
    return <View ref={ref} {...props}/>;
  }
);
