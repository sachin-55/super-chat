export const breakpoints = {
  xxxsm: "20em", //320px
  xxsm: "22.5em", //360px
  xsm: "30em", //480px
  sm: "40em", //640px
  md: "48em", //768px
  lg: "64em", //1024px
  xl: "75em", //1200px
  xxl: "96em", //1536px
  xxxl: "120em", //1920px
} as const;

export type BreakpointType = typeof breakpoints;

export const breakpointsDeviceWise = {
  xxsmMobile: "22.5em", //360px
  xsmMobile: "30em", //480px
  mobile: "40em", //640px
  tablet: "48em", //768px
  laptop: "64em", //1024px
  xlLaptop: "75em", //1200px
  xxlLaptop: "96em", //1536px
} as const;

export type BreakpointDeviceWiseType = typeof breakpointsDeviceWise;
