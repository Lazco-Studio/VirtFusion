import isBoolean from "lodash/isBoolean";
import isString from "lodash/isString";

import { listServer, type ListOptions } from "./functions/servers/list";
import { retrieveServer } from "./functions/servers/retrieve";
import { createServer, type CreateOptions } from "./functions/servers/create";
import { deleteServer } from "./functions/servers/delete";
import { type BuildOptions, buildServer } from "./functions/servers/build";
import { type AddOptions, addSshKey } from "./functions/sshKeys/add";
import { retrieveUserSshKeys } from "./functions/sshKeys/retrieveByUser";
import { deleteSshKey } from "./functions/sshKeys/delete";
import { retrieveServerTraffic } from "./functions/servers/traffic";
import { testConnection } from "./functions/general/testConnection";
import {
  type ResetPasswordOptions,
  resetPassword,
} from "./functions/servers/resetPassword";
import { retrievePackages } from "./functions/packages/retrieve";

export class VirtFusionV1 {
  private static initialized = false;
  private static host: string;
  private static https: boolean;
  private static baseUrl: string;
  private static token: string;

  general = {
    testConnection: async () => {
      this.checkClassInitialized();
      return await testConnection();
    },
  };

  packages = {
    retrieve: async () => {
      this.checkClassInitialized();
      return await retrievePackages();
    },
  };

  server = {
    list: async (options?: ListOptions) => {
      this.checkClassInitialized();
      return await listServer(options);
    },
    retrieve: async (serverId: number) => {
      this.checkClassInitialized();
      return await retrieveServer(serverId);
    },
    create: async (createOptions: CreateOptions) => {
      this.checkClassInitialized();
      return await createServer(createOptions);
    },
    build: async (serverId: number, buildOptions: BuildOptions) => {
      this.checkClassInitialized();
      return await buildServer(serverId, buildOptions);
    },
    delete: async (serverId: number, delay: number) => {
      this.checkClassInitialized();
      return await deleteServer(serverId, delay);
    },
    traffic: async (serverId: number) => {
      this.checkClassInitialized();
      return await retrieveServerTraffic(serverId);
    },
    resetPassword: async (
      serverId: number,
      resetPasswordOptions: ResetPasswordOptions,
    ) => {
      this.checkClassInitialized();
      return await resetPassword(serverId, resetPasswordOptions);
    },
  };

  sshKeys = {
    add: async (addOptions: AddOptions) => {
      this.checkClassInitialized();
      return await addSshKey(addOptions);
    },
    retrieveUser: async (userId: number) => {
      this.checkClassInitialized();
      return await retrieveUserSshKeys(userId);
    },
    delete: async (sshKeyId: number) => {
      this.checkClassInitialized();
      return await deleteSshKey(sshKeyId);
    },
  };

  static init(options: { host: string; token: string; useHttps: boolean }) {
    if (VirtFusionV1.initialized) {
      throw new Error("VirtFusionV1 has already been initialized");
    }

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
    VirtFusionV1.baseUrl = useHttps
      ? `https://${host}/api/v1`
      : `http://${host}/api/v1/`;
    VirtFusionV1.token = token;

    VirtFusionV1.initialized = true;

    return VirtFusionV1;
  }

  getValue(key: "host" | "https" | "baseUrl" | "token") {
    this.checkClassInitialized();

    return VirtFusionV1[key];
  }

  private checkClassInitialized() {
    if (!VirtFusionV1.initialized) {
      throw new Error("VirtFusionV1 is not initialized");
    }
  }
}
