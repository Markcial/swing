import * as React from "react";
import { duration, setDuration, delay, setDelay, timingFn, setTimingFn, TimingFn } from "@markcial/swing";

export default () => (
  <dl>
    <dt>SetDuration(ms)</dt>
    <dd>
      <input type="number" defaultValue={duration} step="100" onChange={({ target: { value }}) => setDuration(value as unknown as number)}/>
    </dd>
    <dt>SetTimingFn</dt>
    <dd>
      <select value={timingFn} onChange={({ target: { value }}) => setTimingFn(value as unknown as TimingFn)}>
        {Object.values(TimingFn).map((fn: string) => (
          <option key={fn} value={fn}>{fn}</option>
        ))}
      </select>
    </dd>
    <dt>SetDelay(ms)</dt>
    <dd>
      <input type="number" step="100" defaultValue={delay} onChange={({ target: { value }}) => setDelay(value as unknown as number)}/>
    </dd>
  </dl>
);
