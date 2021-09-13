import { useEffect } from "../deps/hooks.ts";

export function useFrame(
  f: (time: number, span: number) => void,
  inputs: unknown[] = [],
) {
  useEffect(() => {
    let time: number | undefined;
    let id = requestAnimationFrame(function loop(now) {
      if (time === undefined) time = now;
      const span = (now - time) / 1000;
      if (span > 0) {
        f(time, span);
        time = now;
      }
      id = requestAnimationFrame(loop);
    });
    return () => cancelAnimationFrame(id);
  }, inputs);
}
