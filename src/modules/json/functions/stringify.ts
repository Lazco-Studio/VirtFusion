// biome-ignore lint/suspicious/noShadowRestrictedNames:
import { isNaN } from "lodash";

export function stringify(
  obj: any,
  options: {
    preserve: { undefined?: boolean; NaN?: boolean };
    useOriginal: { undefined?: boolean; NaN?: boolean };
  } = {
    preserve: {
      undefined: false,
      NaN: false,
    },
    useOriginal: {
      undefined: false,
      NaN: false,
    },
  },
): string {
  const preserveUndefined = options.preserve.undefined;
  const preserveNaN = options.preserve.NaN;
  const useOriginalUndefined = options.useOriginal.undefined;
  const useOriginalNaN = options.useOriginal.NaN;

  return JSON.stringify(
    obj,
    (_, value) => {
      if (preserveUndefined && value === undefined) {
        return useOriginalUndefined ? "undefined" : "__undefined__";
      }
      if (preserveNaN && typeof value === "number" && isNaN(value)) {
        return useOriginalNaN ? "NaN" : "__NaN__";
      }
      return value;
    },
    2,
  );
}
