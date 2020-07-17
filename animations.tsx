export const fade = (on: boolean) => ({ opacity: on ? 1 : 0}); 
export const spin = (degs: number) => ({ transform: `rotate(${degs}deg)` });
