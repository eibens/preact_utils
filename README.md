# Preact Utils for Deno

[preact_utils](#) is a collection of utility functions, tools, and resources for
using [Preact](https://preactjs.com) in TypeScript for Deno.

[![License][license-shield]](LICENSE) [![Github tag][github-shield]][github]
[![Build][build-shield]][build] [![Code coverage][coverage-shield]][coverage]

# Documentation

Simply import `.ts` and `.tsx` files from this repository using TypeScript URL
imports:

```ts
import { useHover } from "https://raw.githubusercontent.com/eibens/preact_utils/<ref>/hooks/use_hover.ts";
```

## Hooks

The [hooks](hooks) directory contains commonly needed hooks.

## TSX and Typings

The [deps](deps) directory exports the Preact library with correct Deno typings.
Only one version of Preact is supported right now. Once Preact supports Deno,
one should import the official files.

```tsx
import * as React from "<base_url>/deps/react.ts";
import { useEffect } from "<base_url>/deps/hooks.ts";
```

<!-- badges -->

[github]: https://github.com/eibens/preact_utils
[github-shield]: https://img.shields.io/github/v/tag/eibens/preact_utils?label&logo=github
[coverage-shield]: https://img.shields.io/codecov/c/github/eibens/preact_utils?logo=codecov&label
[license-shield]: https://img.shields.io/github/license/eibens/preact_utils?color=informational
[coverage]: https://codecov.io/gh/eibens/preact_utils
[build]: https://github.com/eibens/preact_utils/actions/workflows/ci.yml
[build-shield]: https://img.shields.io/github/workflow/status/eibens/preact_utils/ci?logo=github&label
