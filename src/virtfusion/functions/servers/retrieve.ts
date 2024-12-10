import { isInteger } from "lodash";
import { urlJoin } from "url-join-ts";

import { CustomError } from "modules/customError";
import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function retrieveServer(serverId: number) {
  if (!isInteger(serverId)) {
    throw new CustomError({
      errorMessage: "Server ID must be an integer",
      errorObject: { serverId },
    });
  }

  return await sendRequest(
    HttpRequestMethods.GET,
    urlJoin("servers", String(serverId)),
    {
      passToken: true,
    },
  );
}
