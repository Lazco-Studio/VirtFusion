import { HttpStatusCode } from "axios";

import { json } from "modules/json";

export class CustomError extends Error {
  errorMessage?: string;
  errorObject?: object;
  httpStatusCode?: HttpStatusCode;

  constructor(
    payload?: {
      errorMessage?: string;
      errorObject?: object;
    },
    httpStatusCode?: HttpStatusCode,
  ) {
    super();
    this.errorMessage = payload?.errorMessage;
    this.errorObject = json.toJsonObject(payload?.errorObject, {
      preserve: {
        undefined: true,
        NaN: true,
      },
    });
    this.httpStatusCode = httpStatusCode || HttpStatusCode.InternalServerError;
  }
}
