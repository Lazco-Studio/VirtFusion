import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function resetPassword(
  serverId: number,
  resetPasswordOptions: ResetPasswordOptions,
) {
  return (await sendRequest(
    HttpRequestMethods.POST,
    ["servers", String(serverId), "resetPassword"],
    {
      passToken: true,
      body: resetPasswordOptions,
    },
  )) as Promise<ResetServerPasswordResponse>;
}

export type ResetPasswordOptions = {
  user: string;
  sendMail?: boolean;
};

export type ResetServerPasswordResponse = {
  data: {
    queueId: number;
    expectedPassword: string;
  };
};
