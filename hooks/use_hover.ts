/// <reference lib="dom"/>
import { Ref, useState } from "../deps/hooks.ts";
import { useEvent } from "./use_event.ts";

export const useHover = (ref: Ref<HTMLElement>) => {
  const [state, setState] = useState(false);
  useEvent(ref, "pointerover", () => setState(true));
  useEvent(ref, "pointerout", () => setState(false));
  return state;
};
