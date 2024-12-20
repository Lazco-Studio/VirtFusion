# VirtFusion
[![](https://img.shields.io/npm/v/virtfusion.svg?color=blue)](https://www.npmjs.com/package/virtfusion) [![](https://img.shields.io/npm/last-update/virtfusion.svg)](https://github.com/Lazco-Studio/VirtFusion/commits/main) [![](https://img.shields.io/npm/dm/virtfusion?color=E4BD68)](https://www.npmjs.com/package/virtfusion) [![](https://img.shields.io/npm/l/virtfusion.svg?color=e3e3e3)](https://www.gnu.org/licenses/gpl-3.0.html)

A TypeScript client for interacting with the VirtFusion API. Built by [Lazco Studio](https://github.com/Lazco-Studio).

## Installation
Install the package using `pnpm`:
```bash
pnpm add virtfusion
```

## Usage

### Initialization
Before making API calls, initialize the client with the required configuration:
```ts
import { VirtFusionV1 } from "virtfusion";

const virtfusion = new VirtFusionV1();

const VIRTFUSION_API_HOST = "vf.example.com"; // Hostname of the VirtFusion API server
const VIRTFUSION_API_KEY = "****" // Your API key

virtfusion.init({
  host: VIRTFUSION_API_HOST,
  token: VIRTFUSION_API_KEY,
  useHttps: true,
});
```

> [!TIP]
> For detailed usage instructions, please refer to the [Wiki Page](https://github.com/Lazco-Studio/VirtFusion/wiki).

## Roadmap
> [!NOTE]
> The project is under active development, with features being implemented incrementally. For detailed features support list, please refer to the [Roadmap Page](https://github.com/Lazco-Studio/VirtFusion/wiki/Roadmap).