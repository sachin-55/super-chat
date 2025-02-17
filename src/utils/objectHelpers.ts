type SelectFields<T, K extends keyof T> = {
  [P in K]: T[P];
};

export function selectFields<T extends object, K extends keyof T>(
  obj: T,
  fields: K[]
): SelectFields<T, K> {
  const result: Partial<SelectFields<T, K>> = {};
  fields.forEach((field) => {
    if (field in obj) {
      result[field] = obj[field];
    }
  });
  return result as SelectFields<T, K>;
}

type ExcludeFields<T, K extends keyof T> = Omit<T, K>;

export function excludeFields<T extends object, K extends keyof T>(
  obj: T,
  fields: K[]
): ExcludeFields<T, K> {
  const entries = Object.entries(obj).filter(
    ([key]) => !fields.includes(key as K)
  );
  return Object.fromEntries(entries) as ExcludeFields<T, K>;
}

export function excludeWithNestedFields<T extends object>(
  obj: T,
  fields: string[]
): Partial<T> {
  const result: Partial<T> = { ...obj };

  for (const field of fields) {
    const keys = field.split(".");

    let current: any = result;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) break;
      current = current[keys[i]];
    }

    const lastKey = keys[keys.length - 1];
    if (Object.prototype.hasOwnProperty.call(current, lastKey)) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete current[lastKey];
    }
  }

  return result;
}
