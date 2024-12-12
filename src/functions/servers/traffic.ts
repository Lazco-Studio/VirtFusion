import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrieveServerTraffic(serverId: number) {
  return await sendRequest(
    HttpRequestMethods.GET,
    ["servers", String(serverId), "traffic"],
    {
      passToken: true,
    },
  );
}
