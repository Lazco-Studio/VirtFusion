import { isEmpty, isInteger } from "lodash";

import { CustomError } from "modules/customError";
import { isSshPublicKey } from "modules/isSshPublicKey";
import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function addSshKey(addOptions: AddOptions) {
  const { userId, name, publicKey } = addOptions;
  if (!isInteger(userId)) {
    throw new CustomError({
      errorMessage: "User ID must be an integer",
      errorObject: { userId },
    });
  }

  if (isEmpty(name.trim())) {
    throw new CustomError({
      errorMessage: "Name is required",
      errorObject: { name },
    });
  }

  if (!isSshPublicKey(publicKey)) {
    throw new CustomError({
      errorMessage: "Public key must be a valid SSH public key",
      errorObject: { publicKey },
    });
  }

  return (await sendRequest(HttpRequestMethods.POST, "ssh_keys", {
    passToken: true,
    body: addOptions,
  })) as Promise<AddSshKeyResponse>;
}

export type AddOptions = {
  userId: number; // ID of the user
  name: string; // Name for the SSH key
  publicKey: string; // SSH public key
};

export type AddSshKeyResponse = {
  data: {
    id: number;
    name: string;
    type: string;
    createdAt: string;
  };
};
