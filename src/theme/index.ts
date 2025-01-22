import { colors } from "../subscribers/colorSubscribers";
import { breakpoints, breakpointsDeviceWise } from "./breakpoints";
import { main as mainColors } from "./colors";
import { fontFamily } from "./fontFamily";
import { fontSize } from "./fontSizes";
import { fontWeights } from "./fontWeight";
import { zIndices } from "./zIndices";

export const theme = {
  colors: colors || mainColors,
  fontFamily,
  fontSize,
  fontWeights,
  breakpoints,
  breakpointsDeviceWise,
  zIndices,
};

export type ThemeType = typeof theme;
