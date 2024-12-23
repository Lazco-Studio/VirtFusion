import isInteger from "lodash/isInteger";

import { CustomError } from "modules/customError";
import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function deleteServer(serverId: number, delay: number) {
  if (!isInteger(serverId)) {
    throw new CustomError({
      errorMessage: "Server ID must be an integer",
      errorObject: { serverId },
    });
  }

  if (!isInteger(delay) || delay < 0 || delay > 43800) {
    throw new CustomError({
      errorMessage: "Delay must be an integer, range: 0 ~ 43800",
      errorObject: { delay },
    });
  }

  return await sendRequest<DeleteServerResponse>(
    HttpRequestMethods.DELETE,
    ["servers", String(serverId)],
    {
      passToken: true,
      query: {
        delay,
      },
    },
  );
}

export type DeleteServerResponse = undefined;
