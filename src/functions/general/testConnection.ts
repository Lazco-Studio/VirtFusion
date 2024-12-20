import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function testConnection(
  testConnectionOptions?: TestConnectionOptions,
) {
  const { timeout } = testConnectionOptions || {};

  return await sendRequest<TestConnectionResponse>(
    HttpRequestMethods.GET,
    ["connect"],
    {
      passToken: true,
      timeout: timeout || 3 * 1000,
    },
  );
}

export type TestConnectionOptions = {
  timeout?: number;
};

export type TestConnectionResponse = [];
