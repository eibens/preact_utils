# Preact Utils for Deno

[preact_utils](#) is a Deno port of [Preact](https://preactjs.com) and a small
library of custom hooks.

[![License](https://img.shields.io/github/license/eibens/preact_utils?color=informational)](LICENSE)
[![Repository](https://img.shields.io/github/v/tag/eibens/preact_utils?label&logo=github)](https://github.com/eibens/preact_utils)
[![ci](https://github.com/eibens/preact_utils/actions/workflows/ci.yml/badge.svg)](https://github.com/eibens/preact_utils/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/eibens/preact_utils/branch/master/graph/badge.svg?token=OV98O91EJ1)](https://codecov.io/gh/eibens/preact_utils)

# History

I repeatedly failed to get Preact typings to work with Deno in VSCode. There is
[some discussion here](https://github.com/preactjs/preact/issues/3075) and even
a link to a repository with a supposed fix, but I couldn't get it to work. Until
version `v1.0.0-alpha` I imported the bundled sources from a CDN and only
included the typings.

Recently, I discovered
[a problem](https://github.com/eibens/preact_utils/issues/1) which prevented me
from importing the library from multiple locations. Porting the
[whole library](preact/README.md) seemed to do the trick, even though I am
unsure of the exact reason. Since porting currently happens manually, the
version of preact provided here might be outdated.

# Usage

The [mod.ts](mod.ts) module exports all of Preact, native hooks, as well as the
custom hooks under [hooks](hooks):

```ts
// Replace 'master' with the desired version.
import * as React from "https://raw.githubusercontent.com/eibens/preact_utils/master/mod.ts";
```

The [preact.ts](preact.ts) module exports all core Preact features with Deno
compatible typings. The [hooks.ts](hooks.ts) module exports all Preact hooks:

```ts
import * as React from "./preact.ts";
import { useEffect } from "./hooks.ts";
```

The [hooks](hooks) directory contains custom hooks that I find useful. The
[hooks/mod.ts](hooks/mod.ts) module exports all custom hooks:

```ts
import { useHover } from "./hooks/mod.ts";
```

# License

See the [LICENSE](LICENSE) file. Everything under [preact](preact) was copied
from the original preact project and [preact/LICENSE](preact/LICENSE).
