# preact_utils/preact

This directory contains a Deno port of the
[preact sources at a particular commit](https://github.com/preactjs/preact/commit/4f08ae4d607964ae8222e910d3b209def75626b0).
These are the steps that were taken to port the sources:

- Copy the `<preact>/src` directory to `<preact_utils>/preact`.
- Copy the `<preact>/hooks/src` directory to `<preact_utils>/preact/hooks`.
- Copy the `<preact>/LICENSE` file to `<preact_utils>/preact/LICENSE`.
- Add `.js` extensions to all imports of JavaScript files.
- Add `.d.ts` extensions to all imports of TypeScript typing files.
- Fix import paths in `<preact_utils>/preact/hooks/*`.
- Run `deno fmt` on all files.

# License

Except for the aforementioned modifications, the code was copied directly from
the original preact repository. See the
[original preact license](preact/LICENSE).
