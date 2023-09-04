import {
  breakpoints,
  breakpointsDeviceWise,
  darkColors,
  fontFamily,
  fontSize,
  fontWeight,
  lightColors,
} from "./theme";

type ColorType = {
  primary: string;
  accent: string;
  secondary: string;
  highlight: string;
  warning: string;
  caution: string;
  danger: string;
  success: string;
  info: string;
};

type ExtraColorType = {
  dark?: string;
  textColor?: string;
  caption?: string;
  borderColor?: string;
  background?: string;
};

type BreakpointsType = typeof breakpoints;
type BreakpointsDeviceWiseType = typeof breakpointsDeviceWise;
type FontFamilyType = typeof fontFamily;
type FontSizeType = typeof fontSize;
type FontWeightType = typeof fontWeight;
type LightColorsType = typeof lightColors;
type DarkColorsType = typeof darkColors;

export default interface ITheme {
  main: ColorType &
    ExtraColorType & {
      hard: ColorType;
      soft: {
        50: ColorType;
        60: ColorType;
        70: ColorType;
        80: ColorType;
        90: ColorType;
      };
    };
  light: LightColorsType;
  dark: DarkColorsType;
  fontFamily: FontFamilyType;
  fontSize: FontSizeType;
  fontWeight: FontWeightType;
  breakpoints: BreakpointsType;
  breakpointsDeviceWise: BreakpointsDeviceWiseType;
}
