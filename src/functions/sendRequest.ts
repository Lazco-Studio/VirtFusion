import axios from "axios";
import { urlJoin } from "url-join-ts";

import { object } from "modules/object";
import { CustomError } from "modules/customError";
import { VirtFusionV1 } from "..";
import { isArray } from "lodash";

export async function sendRequest<ResponseType>(
  method: HttpRequestMethods,
  endpoint: string[],
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
      url: urlJoin(String(virtfusion.getValue("baseUrl")), ...endpoint),
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

    if (isArray(responseData)) {
      return responseData as unknown as Promise<ResponseType>;
    }

    const data = responseData?.data;
    return {
      ...object.convertKeyToCamelCase(responseData),
      data,
    } as Promise<ResponseType>;
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
