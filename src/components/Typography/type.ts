import { ThemeType } from "../../theme";
import { NestedColorKeys } from "../../theme/colors";

export type SizeType = keyof ThemeType["fontSize"];
export type FontWeightType = keyof ThemeType["fontWeights"];

export type FontFamilyType = keyof ThemeType["fontFamily"];
export type AsType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

export type StyleType = {
  $fontFamily: FontFamilyType;
  $size: SizeType;
  $fontWeight: FontWeightType;
  $inline?: boolean;
  $color: NestedColorKeys;
  $margin?: string;
  $padding?: string;
};
