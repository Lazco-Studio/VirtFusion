import axios from "axios";
import { urlJoin } from "url-join-ts";

import { object } from "modules/object";
import { CustomError } from "modules/customError";
import { VirtFusionV1 } from "..";

export async function sendRequest(
  method: HttpRequestMethods,
  endpoint: string | string[],
  options: {
    passToken: boolean;
    query?: object;
    body?: object;
  },
) {
  try {
    const { passToken, query, body } = options;

    const virtfusion = new VirtFusionV1();

    const response = await axios({
      method,
      url: urlJoin(String(virtfusion.getValue("baseUrl")), endpoint),
      data: body,
      params: query,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: passToken
          ? `Bearer ${virtfusion.getValue("token")}`
          : undefined,
      },
    });

    const responseData = response.data;
    const data = responseData?.data;
    return {
      ...object.convertKeyToCamelCase(responseData),
      data,
    } as Promise<any>;
  } catch (error) {
    if (error?.response) {
      throw new CustomError(
        {
          errorMessage: error.response.data.msg,
          errorObject: error.response.data,
        },
        error.response.status,
      );
    }
    throw new CustomError({ errorMessage: error.message });
  }
}

export enum HttpRequestMethods {
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  PUT = "PUT",
  DELETE = "DELETE",
  POST = "POST",
  PATCH = "PATCH",
  CONNECT = "CONNECT",
}
