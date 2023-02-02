import { forwardRef } from "react";
import styled from "styled-components";
import { CmpProps } from "$types";
import * as images from "./images";
import { checkPropTypes } from "prop-types";

export type ImageIconType = keyof typeof images;

const styledImages = Object.keys(images).reduce((acc, name) => {
  const Icon = images[name as ImageIconType];

  const StyledImage = styled(Icon)`
    display: block;
    flex-shrink: 0;
    fill: ${(props): string => props.theme.palette.primary.light};
  `;

  acc[name as ImageIconType] = StyledImage;

  return acc;
}, {} as typeof images);

export interface ImageIconProps extends Omit<React.SVGProps<SVGSVGElement>, "ref">, CmpProps {
  image: ImageIconType;
}

export const ImageIcon = forwardRef<SVGSVGElement, ImageIconProps>(({ image, ...rest }, ref) => {
  const ImageCmp = styledImages[image];

  return <ImageCmp title={image} {...rest} ref={ref} />;
});
