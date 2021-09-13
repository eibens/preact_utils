# Preact Utils for Deno

[preact_utils](#) is a collection of utility functions, tools, and resources for
using [Preact](https://preactjs.com) in TypeScript for Deno.

[![License][license-shield]](LICENSE) [![Github tag][github-shield]][github]
[![Build][build-shield]][build] [![Code coverage][coverage-shield]][coverage]

# Documentation

Simply import `.ts` and `.tsx` files from this repository using TypeScript URL
imports:

```ts
import * as React from "https://raw.githubusercontent.com/eibens/preact_utils/<ref>/preact.ts";
```

## Preact and Preact hooks

The [preact.ts](preact.ts) module exports all core Preact features with Deno
compatible typings. The [hooks.ts](hooks.ts) module exports all Preact hooks.
Only one version of Preact is supported right now. Once Preact supports Deno out
of the box, one should import the official source files.

```ts
import * as React from "<base_url>/preact.ts";
import { useEffect } from "<base_url>/hooks.ts";
```

## Custom Hooks

The [hooks](hooks) directory contains custom hooks that I find useful. The
[hooks/mod.ts](hooks/mod.ts) module exports all custom hooks.

```ts
import { useHover } from "<base_url>/hooks/mod.ts";
```

<!-- badges -->

[github]: https://github.com/eibens/preact_utils
[github-shield]: https://img.shields.io/github/v/tag/eibens/preact_utils?label&logo=github
[coverage-shield]: https://img.shields.io/codecov/c/github/eibens/preact_utils?logo=codecov&label
[license-shield]: https://img.shields.io/github/license/eibens/preact_utils?color=informational
[coverage]: https://codecov.io/gh/eibens/preact_utils
[build]: https://github.com/eibens/preact_utils/actions/workflows/ci.yml
[build-shield]: https://img.shields.io/github/workflow/status/eibens/preact_utils/ci?logo=github&label
