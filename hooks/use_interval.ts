import { useEffect } from "../deps/hooks.ts";

export function useInterval(f: () => void, delay: number) {
  useEffect(() => {
    const interval = setInterval(f, delay);
    return () => clearInterval(interval);
  }, []);
}
