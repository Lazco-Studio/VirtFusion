# VirtFusion
![](https://img.shields.io/npm/v/virtfusion.svg?color=blue) ![](https://img.shields.io/npm/l/virtfusion.svg?color=e3e3e3) ![](https://img.shields.io/npm/last-update/virtfusion.svg)

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
The project is under active development, with features being implemented incrementally. Below is the roadmap of the currently supported and planned features:

### Backups
- [ ] Retrieve a servers backups

### DNS
- [ ] Retrieve a DNS service

### General
- [ ] Test Connection

### Hypervisors
- [ ] Retrieve a hypervisor

### IP Blocks
- [ ] Add IPv4
- [ ] List
- [ ] Retrieve

### Media
- [ ] Retrieve a ISO
- [ ] Retrieve grouped OS templates available for a server package

### Packages
- [ ] Retrieve a server package by id
- [ ] Retrieve server packages

### Queue
- [ ] Retrieve a queue item

### SSH Keys
- [x] Add
- [x] Delete
- [x] Retrieve a users SSH keys
- [ ] Retrieve

### Self Service
- [ ] Add user credit
- [ ] Add user hourly group profile
- [ ] Add user resource group profile
- [ ] Add user resource pack
- [ ] Cancel user credit
- [ ] Delete resource pack servers
- [ ] Delete user resource pack
- [ ] Get user resource pack
- [ ] Hourly stats by user extRelationId
- [ ] Modify user access
- [ ] Modify user resource pack
- [ ] Remove user hourly group profile
- [ ] Remove user resource group profile
- [ ] Report by user extRelationId
- [ ] Retrieve currencies
- [ ] Set user hourly resource pack
- [ ] Suspend resource pack servers
- [ ] Unsuspend resource pack servers
- [ ] Usage by user extRelationId

### Servers
- [ ] Add a IPv4 or IPv6 address to the server interface whitelist
- [ ] Add a quantity of IPv4
- [ ] Add IPv4
- [ ] Backup Plan Add or Remove
- [x] Build
- [ ] Change package
- [x] Create
- [ ] Delete a IPv4 or IPv6 address from the server interface whitelist
- [ ] Delete IPv4
- [x] Delete
- [ ] Firewall Disable
- [ ] Firewall Enable
- [ ] Firewall Retrieve
- [ ] Firewall Rules Apply
- [x] List
- [ ] Modify Name
- [ ] Power
- [ ] Reset Password
- [ ] Retrieve a users servers
- [ ] Retrieve grouped OS templates
- [x] Retrieve
- [ ] Suspend
- [ ] Throttle CPU
- [ ] Traffic Block Add
- [ ] Traffic Block Remove
- [ ] Traffic Blocks Retrieve
- [x] Traffic Statistics
- [ ] Unsuspend
- [ ] VNC

### Users
- [ ] Create
- [ ] Generate a set of login tokens for a user based on a ext relation id
- [ ] Generate a set of login tokens for a user based on a server id and ext relation id
- [ ] Modify by extRelationId
- [ ] Reset a password by extRelationId
- [ ] Retrieve user by extRelationId