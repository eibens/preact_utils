// NOTE: These are necessary for avoiding type errors during tests.
// See: https://github.com/denoland/deno/issues/8070#issuecomment-717708036f
/// <reference no-default-lib="true"/>
/// <reference lib="deno.ns" />

// Simply import every file.
// TODO: Write real tests (see coverage reports).
import "./hooks/use_delta.ts";
import "./hooks/use_event.ts";
import "./hooks/use_focus.ts";
import "./hooks/use_frame.ts";
import "./hooks/use_global_css.ts";
import "./hooks/use_hover.ts";
import "./hooks/use_interval.ts";
import "./hooks/use_pointer.ts";
