import { cli } from "https://deno.land/x/edcb@v1.0.0-alpha.6/mod.ts";

if (import.meta.main) {
  await cli({
    ignore: "deps,preact",
  });
}
