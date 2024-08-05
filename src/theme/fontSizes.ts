export const fontSize = {
  xsCaption: "8px",
  sCaption: "10px",
  caption: "12px",
  normal: "14px",
  title: "16px",
  lTitle: "18px",
  heading: "20px",
  lHeading: "24px",
  xlDisplay: "32px",
} as const;

export type FontSizeType = typeof fontSize;
