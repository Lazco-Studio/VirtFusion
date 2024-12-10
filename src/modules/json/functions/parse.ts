export function parse(
  jsonString: string,
  options: {
    useOriginal: { undefined?: boolean; NaN?: boolean };
  } = {
    useOriginal: {
      undefined: false,
      NaN: false,
    },
  },
): any {
  const useOriginalUndefined = options.useOriginal.undefined;
  const useOriginalNaN = options.useOriginal.NaN;

  return JSON.parse(jsonString, (_, value) => {
    if (!useOriginalUndefined && value === "__undefined__") {
      return undefined;
    }
    if (!useOriginalNaN && value === "__NaN__") {
      return Number.NaN;
    }
    if (useOriginalUndefined && value === "undefined") {
      return undefined;
    }
    if (useOriginalNaN && value === "NaN") {
      return Number.NaN;
    }
    return value;
  });
}
