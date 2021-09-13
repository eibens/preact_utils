import { PropRef, useState } from "../deps/hooks.ts";
import { useEvent } from "./use_event.ts";

type Pair = [number, number];
type Scale = (x: number, w: number) => number;

function linear([a, b]: Pair, [c, d]: Pair): Scale {
  const ab = b - a;
  const s = (d - c) / ab;
  const t = a * (c - d) / ab + c;
  return (x: number, w: number) => x * s + w * t;
}

export function usePointer(ref: PropRef<HTMLElement>): Pair {
  const [position, setPosition] = useState<Pair>([0, 0]);

  useEvent(ref, "pointermove", (e) => {
    if (!ref.current) return;
    const { left, width, top, height } = ref.current.getBoundingClientRect();
    const rangeX: Pair = [left, left + width];
    const rangeY: Pair = [top, top + height];
    const scaleX = linear(rangeX, [0, 1]);
    const scaleY = linear(rangeY, [1, 0]);
    const x = scaleX(e.clientX, 1);
    const y = scaleY(e.clientY, 1);
    setPosition([x, y]);
  }, []);

  return position;
}
