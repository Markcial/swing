import * as React from "react";
export * from "./animations";

type TransitionFn = (evt: TransitionEvent, ref: HTMLElement) => void;

interface MProps {
  onTransitionStart?: TransitionFn;
  onTransitionRun?: TransitionFn;
  onTransitionEnd?: TransitionFn;
}
export default (View: React.ComponentPropsWithRef<React.ElementType>): React.FC<MProps> => (
  ({ 
    onTransitionStart = (...params: any) => null,
    onTransitionEnd = (...params: any) => null,
    onTransitionRun = (...params: any) => null,
    ...props
  }) => {
    const ref = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
      const { current } = ref;
      current?.addEventListener("transitionstart", (evt: any) => onTransitionStart(evt, current));
      current?.addEventListener("transitionrun", (evt: any) => onTransitionRun(evt, current));
      current?.addEventListener("transitionend", (evt: any) => onTransitionEnd(evt, current));
      return () => {
        current?.removeEventListener("transitionstart", (evt: any) => onTransitionStart(evt, current));
        current?.removeEventListener("transitionrun", (evt: any) => onTransitionRun(evt, current));
        current?.removeEventListener("transitionend", (evt: any) => onTransitionEnd(evt, current));
      }
    }, [ref]);
    return <View ref={ref} {...props}/>;
  }
);
