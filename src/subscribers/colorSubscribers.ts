import { ColorsType, ColorSchemeType } from "../theme/colors";

export let colors: ColorsType | undefined;
export let colorsScheme: ColorSchemeType | undefined;
export let changeColorScheme:
  | ((colorScheme: ColorSchemeType) => void)
  | undefined;

export const subscribeColors = (subscribedColors: ColorsType) => {
  colors = subscribedColors;
  return () => {
    colors = undefined;
  };
};

export const subscribeColorsScheme = (
  subscribedColorsScheme: ColorSchemeType
) => {
  colorsScheme = subscribedColorsScheme;
  return () => {
    colorsScheme = undefined;
  };
};

export const subscribeChangeColorScheme = (
  changeColorSchemeFunction: (colorScheme: ColorSchemeType) => void
) => {
  changeColorScheme = changeColorSchemeFunction;
  return () => {
    changeColorScheme = undefined;
  };
};
