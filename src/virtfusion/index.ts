import { isBoolean, isString } from "lodash";

import { listServer, type ListOptions } from "./functions/servers/list";
import { retrieveServer } from "./functions/servers/retrieve";
import { createServer, type CreateOptions } from "./functions/servers/create";
import { deleteServer } from "./functions/servers/delete";
import { type BuildOptions, buildServer } from "./functions/servers/build";
import { type AddOptions, addSshKey } from "./functions/sshKeys/add";
import { retrieveUserSshKeys } from "./functions/sshKeys/retrieveByUser";
import { deleteSshKey } from "./functions/sshKeys/delete";
import { retrieveServerTraffic } from "./functions/servers/traffic";

export class VirtFusionV1 {
  static initialized = false;
  static host: string;
  static https: boolean;
  static baseUrl: string;
  static token: string;

  server = {
    list: async (options?: ListOptions) => {
      checkInitialized();
      return await listServer(options);
    },
    retrieve: async (serverId: number) => {
      checkInitialized();
      return await retrieveServer(serverId);
    },
    create: async (createOptions: CreateOptions) => {
      checkInitialized();
      return await createServer(createOptions);
    },
    build: async (serverId: number, buildOptions: BuildOptions) => {
      checkInitialized();
      return await buildServer(serverId, buildOptions);
    },
    delete: async (serverId: number, delay: number) => {
      checkInitialized();
      return await deleteServer(serverId, delay);
    },
    traffic: async (serverId: number) => {
      checkInitialized();
      return await retrieveServerTraffic(serverId);
    },
  };

  sshKeys = {
    add: async (addOptions: AddOptions) => {
      checkInitialized();
      return await addSshKey(addOptions);
    },
    retrieveUser: async (userId: number) => {
      checkInitialized();
      return await retrieveUserSshKeys(userId);
    },
    delete: async (sshKeyId: number) => {
      checkInitialized();
      return await deleteSshKey(sshKeyId);
    },
  };

  init(options: { host: string; token: string; useHttps: boolean }) {
    const { host, useHttps, token } = options;

    if (!host.trim() || !token.trim()) {
      throw new Error("Host is required");
    }
    if (!isString(host)) {
      throw new Error("Host must be a string");
    }
    if (!isBoolean(useHttps)) {
      throw new Error("Use HTTPS must be a boolean");
    }
    if (!isString(token)) {
      throw new Error("Token must be a string");
    }

    VirtFusionV1.host = host;
    VirtFusionV1.https = useHttps;
    VirtFusionV1.baseUrl = VirtFusionV1.https
      ? `https://${VirtFusionV1.host}/api/v1`
      : `http://${VirtFusionV1.host}/api/v1/`;
    VirtFusionV1.token = token;

    VirtFusionV1.initialized = true;
  }

  getValue(key: keyof typeof VirtFusionV1) {
    checkInitialized();

    return VirtFusionV1[key];
  }
}

function checkInitialized() {
  if (!VirtFusionV1.initialized) {
    throw new Error("VirtFusionV1 is not initialized");
  }
}
