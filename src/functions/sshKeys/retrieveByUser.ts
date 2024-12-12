import { sendRequest, HttpRequestMethods } from "../sendRequest";

export async function retrieveUserSshKeys(userId: number) {
  return (await sendRequest(
    HttpRequestMethods.GET,
    ["ssh_keys", "user", String(userId)],
    {
      passToken: true,
    },
  )) as Promise<RetrieveSshKeysByUserResponse>;
}

export type RetrieveSshKeysByUserResponse = {
  data: {
    id: number;
    name: string;
    publicKey: string;
    type: string;
    enabled: boolean;
    created: string;
    updated: string;
  }[];
};
