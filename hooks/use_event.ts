/// <reference lib="dom"/>
import { Ref, useEffect } from "../deps/hooks.ts";

export type EventMap = Record<string, unknown>;

export type EventTarget<T extends EventTarget<T, M>, M extends EventMap> = {
  addEventListener: <K extends keyof M>(
    type: K,
    handler: (event: M[K]) => void,
  ) => void;
  removeEventListener: <K extends keyof M>(
    type: K,
    handler: (event: M[K]) => void,
  ) => void;
};

export function useEvent<K extends keyof HTMLElementEventMap>(
  ref: Ref<HTMLElement>,
  type: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  inputs?: unknown[],
): void;

export function useEvent<K extends keyof WindowEventMap>(
  ref: Ref<Window>,
  type: keyof WindowEventMap,
  handler: (event: WindowEventMap[K]) => void,
  inputs?: unknown[],
): void;

export function useEvent<
  T extends EventTarget<T, M>,
  M extends EventMap,
  K extends keyof M,
>(
  ref: Ref<T>,
  type: K,
  handler: (event: M[K]) => void,
  inputs?: unknown[],
): void {
  useEffect(() => {
    const obj = ref.current;
    if (!obj) return;
    obj.addEventListener(type, handler);
    return () => {
      if (!ref.current) return;
      obj.removeEventListener(type, handler);
    };
  }, inputs);
}
