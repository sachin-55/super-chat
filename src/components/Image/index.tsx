import React, { useEffect, useState } from "react";

import ImageStyled from "./style";

interface ImageWithDefaultProps extends React.ComponentPropsWithoutRef<"img"> {
  src?: string;
  fallbackSrc?: string;
  errorSrc?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export type StylePropsType = {
  objectFit?: React.CSSProperties["objectFit"];
  imageHeight?: string;
  imageWidth?: string;
  radius?: string;
};

const brokenImagePLaceholder =
  "https://via.placeholder.com/500?text=Image+Not+Supported";

const noImagePLaceholder =
  "https://via.placeholder.com/500?text=Image+Not+Found";

const Image: React.FC<ImageWithDefaultProps & StylePropsType> = ({
  src,
  fallbackSrc = noImagePLaceholder,
  errorSrc = brokenImagePLaceholder,
  alt,
  className,
  ...restProps
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageLoadingError, setImageLoadingError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const handleImageError = () => {
    setImageSrc(errorSrc);
    setImageLoadingError(true);
  };

  if (!imageSrc) {
    return (
      <ImageStyled
        src={fallbackSrc}
        onError={handleImageError}
        alt={alt}
        className={`${className} noImage`}
        loading="lazy"
        {...restProps}
      />
    );
  }
  return (
    <ImageStyled
      src={imageSrc}
      alt={alt}
      onError={handleImageError}
      className={`${className} ${imageLoadingError ? "noImage" : ""}`}
      loading="lazy"
      {...restProps}
    />
  );
};

export default Image;
