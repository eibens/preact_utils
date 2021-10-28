// NOTE: These are necessary for avoiding type errors during tests.
// See: https://github.com/denoland/deno/issues/8070#issuecomment-717708036f
/// <reference no-default-lib="true"/>
/// <reference lib="deno.ns" />

// TODO: Write real tests (see coverage reports).
import * as React from "./mod.ts";

Deno.test("render function is defined", () => {
  if (typeof React["render"] !== "function") {
    throw new Error();
  }
});
