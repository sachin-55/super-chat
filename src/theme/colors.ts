export const darkColors = {
  coolBlack: "#002e63",
  gray: "#666666",
  dimGray: "#696969",
  ebony: "#555d50",
  davysGrey: "#555555",
  charcoal: "#36454f",
  charcoal2: "#444444",
  darkCharcoal: "#333333",
  outerSpace: "#414a4c",
  raisinBlack: "#242124",
  eerieBlack: "#1b1b1b",
  licorice: "#1a1110",
  black: "#000000",
} as const;

export const lightColors = {
  white: "#ffffff",
  gray99: "#fcfcfc",
  gainsboro: "#dbdbdb",
  light: "#d7d0f2",
  snow: "#fffafa",
  seashell: "#FFF5EE",
  ivory: "#FFFFF0",
  whiteSmoke: "#f5f5f5",
  boneWhite: "#f9f6ee",
} as const;

export const mainColors = {
  primary: "#9280D9",
  accent: "#F687B1",
  secondary: "#F1D56F",
  highlight: "#345B9F",
  warning: "#D8882E",
  caution: "#FED440",
  danger: "#D64960",
  success: "#37B75A",
  info: "#4069E1",
  dark: "#444444",
  textColor: "#333333",
  caption: "#666666",
  borderColor: "#dbdbdb",
  background: "#fdfdfd",
  hard: {
    primary: "#4E3E72",
    accent: "#D4618B",
    secondary: "#CFBF5A",
    highlight: "#1F3C62",
    warning: "#A96E1E",
    caution: "#DDBF37",
    danger: "#A8213B",
    success: "#2E7441",
    info: "#314E8A",
  },
  soft: {
    50: {
      primary: "#7C6ABE",
      accent: "#D982A9",
      secondary: "#E8CC73",
      highlight: "#264B7F",
      warning: "#B67132",
      caution: "#F9C542",
      danger: "#B63C4D",
      success: "#2F8D44",
      info: "#365ABD",
    },
    60: {
      primary: "#7B6DA8",
      accent: "#FBA4C8",
      secondary: "#FAED9E",
      highlight: "#3B5D8E",
      warning: "#C79E47",
      caution: "#FDDC6E",
      danger: "#C9405A",
      success: "#4FAF5E",
      info: "#5B7BCB",
    },
    70: {
      primary: "#A89BD3",
      accent: "#FDB8D6",
      secondary: "#FBF2B3",
      highlight: "#5077B7",
      warning: "#DAB659",
      caution: "#FEE89A",
      danger: "#D36C7D",
      success: "#62A670",
      info: "#748ED8",
    },
    80: {
      primary: "#B5A8E1",
      accent: "#FED7E4",
      secondary: "#FAEBC2",
      highlight: "#6E8FCC",
      warning: "#E0B55A",
      caution: "#FEEDA7",
      danger: "#E6868F",
      success: "#7FCF97",
      info: "#8CA3ED",
    },
    90: {
      primary: "#CEC2E4",
      accent: "#FEE4F1",
      secondary: "#FDF7E1",
      highlight: "#A2B3D7",
      warning: "#F0D08A",
      caution: "#FEF6D0",
      danger: "#F1A4AE",
      success: "#B9E4C8",
      info: "#C5D4F1",
    },
  },
} as const;

export type DarkColorsType = typeof darkColors;
export type LightColorsType = typeof lightColors;
export type MainColorsType = typeof mainColors;

export const colors = {
  main: mainColors,
  light: lightColors,
  dark: darkColors,
};

export type ColorsType = typeof colors;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

// type Paths<T, D extends number = 10> = [D] extends [never]
//   ? never
//   : T extends object
//   ? {
//       [K in keyof T]-?: K extends string | number
//         ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
//         : never;
//     }[keyof T]
//   : "";

// export type NestedColorKeys = Paths<ColorsType>;

// type FilteredPaths<T, D extends number = 10> = [D] extends [never]
//   ? never
//   : T extends object
//   ? {
//       [K in keyof T]-?: K extends string | number
//         ? T[K] extends string
//           ? `${K}` | Join<K, FilteredPaths<T[K], Prev[D]>>
//           : Join<K, FilteredPaths<T[K], Prev[D]>>
//         : never;
//     }[keyof T]
//   : T extends string
//   ? ""
//   : never;

type FilteredPaths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: T[K] extends string
        ? `${Extract<K, string>}`
        : T[K] extends object
        ? Join<K, FilteredPaths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : "";

export type NestedColorKeys = FilteredPaths<ColorsType>;
