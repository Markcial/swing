export enum TimingFn {
  Ease = 'ease',
  EaseIn = 'ease-in',
  EaseOut = 'ease-out',
  EaseInOut = 'ease-in-out',
  Linear = 'linear',
  StepStart = 'step-start',
  StepEnd = 'step-end',
  Inherit = 'inherit',
  Initial = 'initial',
  Unset = 'unset',
  // TODO: add function terms
  // @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
  // cubic-bezier(p1, p2, p3, p4)
  // steps( n, <jumpterm>)
}
interface TransitionParams {
  duration: number; // in ms
  timingFn: TimingFn;
  delay: number; // in ms
}
export let duration: number = 700;
export let timingFn: TimingFn = TimingFn.Linear;
export let delay: number = 0;
const defaultTransitionParams: () => TransitionParams = () => ({ duration, timingFn, delay });
export const setDuration = (d: number) => duration = d;
export const setTimingFn = (tf: TimingFn) => timingFn = tf;
export const setDelay = (d: number) => delay = d;
const transition = ({ duration, timingFn, delay} = defaultTransitionParams()) => {
  console.log(duration, timingFn, delay);
  return {
    transition: `all ${duration}ms ${timingFn} ${delay}ms`,
  }
};
interface AnimationParams {
  from?: number | string;
  to?: number | string;
}
export const fade = (on: boolean, ap: AnimationParams = { from: 1, to: 0 }, tp?: TransitionParams) => ({
  opacity: on ? ap.to : ap.from,
  ...transition(tp),
});
export const slideUp = (on: boolean, ap: AnimationParams = { from: 1, to: 0 }, tp?: TransitionParams) => ({
  transform: `scaleY(${ on ? ap.to : ap.from})`,
  transformOrigin: "top",
  ...transition(tp),
});
export const slideDown = (on: boolean, ap: AnimationParams = { from: 1, to: 0 }, tp?: TransitionParams) => ({
  transform: `scaleY(${ on ? ap.to : ap.from})`,
  transformOrigin: "bottom",
  ...transition(tp),
});
export const slideLeft = (on: boolean, ap: AnimationParams = { from: 1, to: 0 }, tp?: TransitionParams) => ({
  transform: `scaleX(${ on ? ap.to : ap.from})`,
  transformOrigin: "left",
  ...transition(tp),
});
export const slideRight = (on: boolean, ap: AnimationParams = { from: 1, to: 0 }, tp?: TransitionParams) => ({
  transform: `scaleX(${ on ? ap.to : ap.from})`,
  transformOrigin: "right",
  ...transition(tp),
});
export const zoom = (on: boolean, ap: AnimationParams = { from: 1, to: 0}, tp?: TransitionParams) => ({
  transform: `scale(${ on ? ap.to : ap.from })`,
  ...transition(tp),
});
// export const spin = (degs: number, tp?: TransitionParams) => ({ transform: `rotate(${degs}deg)`, ...transition(tp) });
