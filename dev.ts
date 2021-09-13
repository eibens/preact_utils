import * as edcb from "https://deno.land/x/edcb@v0.7.1/cli.ts";

if (import.meta.main) {
  await edcb.build({
    ignore: "deps",
  });
}
