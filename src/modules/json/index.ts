import { stringify } from "./functions/stringify";
import { parse } from "./functions/parse";


export const json = {
  stringify,
  parse,
  toJsonObject: (
    obj: any,
    options: {
      preserve: { undefined?: boolean; NaN?: boolean };
    } = {
      preserve: {
        undefined: false,
        NaN: false,
      },
    },
  ) => {
    const preserveUndefined = options.preserve.undefined;
    const preserveNaN = options.preserve.NaN;

    return json.parse(
      stringify(obj, {
        preserve: {
          undefined: preserveUndefined,
          NaN: preserveNaN,
        },
        useOriginal: {
          undefined: true,
          NaN: true,
        },
      }),
    );
  },
};
