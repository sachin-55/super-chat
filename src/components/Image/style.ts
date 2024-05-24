import styled from "styled-components";
import { StylePropsType } from ".";

const ImageStyled = styled.img<StylePropsType>`
  height: ${({ imageHeight }) => imageHeight || "100%"};
  width: ${({ imageWidth }) => imageWidth || "100%"};
  object-fit: ${({ objectFit }) => objectFit || "cover"};
  border-radius: ${({ radius }) => radius || "10px"};
  filter: blur(0px);
  animation: fadeIn 1.5s ease-in-out;
  background: transparent;

  &.noImage {
    object-fit: contain;
  }

  @keyframes fadeIn {
    from {
      filter: blur(10px);
      opacity: 0;
    }
    to {
      filter: blur(0);
      opacity: 1;
    }
  }
`;

export default ImageStyled;
