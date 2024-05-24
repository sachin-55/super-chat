import { breakpoints, breakpointsDeviceWise } from "./breakpoints";
import { colors } from "./colors";
import { fontFamily } from "./fontFamily";
import { fontSize } from "./fontSizes";
import { fontWeights } from "./fontWeight";
import { zIndices } from "./zIndices";

export const theme = {
  colors,
  fontFamily,
  fontSize,
  fontWeights,
  breakpoints,
  breakpointsDeviceWise,
  zIndices,
};

export type ThemeType = typeof theme;
