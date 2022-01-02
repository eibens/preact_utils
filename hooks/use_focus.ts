import { Ref, useState } from "../deps/hooks.ts";
import { useEvent } from "./use_event.ts";

export const useFocus = (ref: Ref<HTMLElement>) => {
  const [state, setState] = useState(false);
  useEvent(ref, "focus", () => setState(true));
  useEvent(ref, "blur", () => setState(false));
  return state;
};
