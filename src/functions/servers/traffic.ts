import { urlJoin } from "url-join-ts";

import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrieveServerTraffic(serverId: number) {
  return await sendRequest(
    HttpRequestMethods.GET,
    urlJoin("servers", String(serverId), "traffic"),
    {
      passToken: true,
    },
  );
}
