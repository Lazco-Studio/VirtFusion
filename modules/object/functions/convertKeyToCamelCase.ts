import camelCase from "lodash/camelCase";
import isArray from "lodash/isArray";
import isPlainObject from "lodash/isPlainObject";

export function convertKeyToCamelCase<T extends Record<string, any>>(
  data: unknown,
): T {
  const recursivelyConvertKeyToCamelCase = (value: any): any => {
    if (isArray(value)) {
      return value.map(recursivelyConvertKeyToCamelCase);
    } else if (isPlainObject(value)) {
      return Object.entries(value).reduce(
        (acc, [key, val]) => {
          acc[camelCase(key)] = recursivelyConvertKeyToCamelCase(val);
          return acc;
        },
        {} as Record<string, any>,
      );
    }
    return value;
  };

  return recursivelyConvertKeyToCamelCase(data) as T;
}
