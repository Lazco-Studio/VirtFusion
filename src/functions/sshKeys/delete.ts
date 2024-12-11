import { urlJoin } from "url-join-ts";
import isInteger from "lodash/isInteger";

import { CustomError } from "modules/customError";
import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function deleteSshKey(sshKeyId: number) {
  if (!isInteger(sshKeyId)) {
    throw new CustomError({
      errorMessage: "Ssh key ID must be an integer",
      errorObject: { sshKeyId },
    });
  }

  return (await sendRequest(
    HttpRequestMethods.DELETE,
    urlJoin("ssh_keys", String(sshKeyId)),
    {
      passToken: true,
    },
  )) as Promise<DeleteSshKeyResponse>;
}

export type DeleteSshKeyResponse = undefined;
