/// <reference lib="dom"/>
import { PropRef, useState } from "../deps/hooks.ts";
import { useEvent } from "./use_event.ts";

export const useHover = (ref: PropRef<HTMLElement>) => {
  const [state, setState] = useState(false);
  useEvent(ref, "pointerover", () => setState(true));
  useEvent(ref, "pointerout", () => setState(false));
  return state;
};
