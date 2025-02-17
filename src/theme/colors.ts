import { colors } from "../subscribers/colorSubscribers";

export type ColorsType = {
  primary: string;
  accent: string;
  secondary: string;
  highlight: string;
  success: string;
  warning: string;
  caution: string;
  info: string;
  danger: string;
  background: string;
  text: string;
  invertedText: string;
  disabled: string;
  border: string;
  transparent: string;
};
export type ColorsKeysType = keyof ColorsType;

export const colorSchemes = ["default", "dark", "light"] as const;
export type ColorSchemeType = (typeof colorSchemes)[number];

export const main: ColorsType = {
  primary: "#4E3E72",
  accent: "#D4618B",
  secondary: "#CFBF5A",
  highlight: "#1F3C62",
  success: "#2E7441",
  warning: "#A96E1E",
  danger: "#A8213B",
  caution: "#FED440",
  info: "#4069E1",
  background: "#FFF5EE",
  text: "#1b1b1b",
  invertedText: "#ececec",
  disabled: "#696969",
  border: "#dbdbdb",
  transparent: "transparent",
};

export const secondary: ColorsType = {
  primary: "#4E3E72",
  accent: "#D4618B",
  secondary: "#CFBF5A",
  highlight: "#1F3C62",
  warning: "#A96E1E",
  caution: "#DDBF37",
  danger: "#A8213B",
  success: "#2E7441",
  info: "#314E8A",
  background: "#fdfdfd",
  text: "#333333",
  invertedText: "#fefefe",
  disabled: "#696969",
  border: "#dbdbdb",
  transparent: "transparent",
} as const;

export const addOpacityToColor = (
  color: ColorsKeysType,
  opacity: number
): string => {
  const hex = colors?.[color];
  if (hex) {
    return addOpacityToHex(hex, opacity);
  }
  return "#fff";
};

export const addOpacityToHex = (hex: string, opacity: number): string => {
  // Ensure the hex starts with a '#' and remove it for processing
  const sanitizedHex = hex.startsWith("#") ? hex.slice(1) : hex;

  // Convert opacity from 0-100 to 0-255 (which is 00-FF in hex)
  const alpha = Math.round((opacity / 100) * 255)
    .toString(16)
    .padStart(2, "0"); // Ensure it's 2 characters long

  // Return the hex value with the added alpha
  return `#${sanitizedHex}${alpha}`;
};

// type Join<K, P> = K extends string | number
//   ? P extends string | number
//     ? `${K}.${P}`
//     : never
//   : never;

// type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

// type FilteredPaths<T, D extends number = 10> = [D] extends [never]
//   ? never
//   : T extends object
//   ? {
//       [K in keyof T]-?: T[K] extends string
//         ? `${Extract<K, string>}`
//         : T[K] extends object
//         ? Join<K, FilteredPaths<T[K], Prev[D]>>
//         : never;
//     }[keyof T]
//   : "";

// export type NestedColorKeys = FilteredPaths<ColorsType>;

// export const getColorValue = (
//   path: NestedColorKeys | undefined
// ): string | undefined => {
//   if (!path) return undefined;
//   return path.split(".").reduce<string | undefined>((o, i) => {
//     if (o && typeof o === "object") {
//       return (o as any)[i];
//     }
//     return undefined;
//   }, colors as any);
// };
