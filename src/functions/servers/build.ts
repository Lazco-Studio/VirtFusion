import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function buildServer(
  serverId: number,
  buildOptions: BuildOptions,
) {
  return await sendRequest(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "build"],
    {
      passToken: true,
      body: buildOptions,
    },
  );
}

export type BuildOptions = {
  name: string; // Name of the server
  hostname: string; // Hostname of the server
  operatingSystemId: number; // Template ID
  vnc?: boolean; // Enable/disable VNC
  ipv6?: boolean; // Enable/disable IPv6
  sshKeys?: number[]; // Array of SSH Key IDs
  email?: boolean; // Enable/disable email (default: false)
};
