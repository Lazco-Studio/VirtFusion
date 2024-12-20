import { HttpRequestMethods, sendRequest } from "../sendRequest";

export async function testConnection() {
  return await sendRequest<[]>(HttpRequestMethods.GET, ["connect"], {
    passToken: true,
  });
}
