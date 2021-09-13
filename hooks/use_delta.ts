import { useState } from "../deps/hooks.ts";

export function useDelta(clock = Date.now) {
  const [time] = useState(clock);
  return clock() - time;
}
