import { useEffect } from "../deps/hooks.ts";

export function useGlobalCss(css: string) {
  useEffect(() => {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [css]);
}
