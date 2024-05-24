import React from "react";

import Image from "../Image";
import AvatarStyled from "./style";

export type SizeType = "xxl" | "xl" | "lg" | "md" | "sm" | "xsm" | number;

const fake_avatar_url = "https://i.pravatar.cc/300?" + Date.now();

interface Props {
  style?: React.CSSProperties;
  size?: "xxl" | "xl" | "lg" | "md" | "sm" | "xsm" | number;
  src?: string;
  [key: string]: unknown;
}

const Avatar = ({
  size = "md",
  src = fake_avatar_url,
  ...restProps
}: Props) => {
  return (
    <AvatarStyled $size={size} {...restProps}>
      <Image src={src || fake_avatar_url} />
    </AvatarStyled>
  );
};

export default Avatar;
