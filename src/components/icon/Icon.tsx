import { forwardRef } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { CmpProps } from "$types";
import { Direction } from "$utility/enums";
import * as icons from "./icons";
import { alert as Alert } from "./icons";

export type IconType = keyof typeof icons;

const defaultRotationMap = {
  [Direction.Up]: 0,
  [Direction.Down]: 180,
  [Direction.Left]: -90,
  [Direction.Right]: 90,
};

const customRotations: Partial<Record<IconType, RotationMap>> = {
  chevron: {
    [Direction.Up]: 180,
    [Direction.Down]: 0,
    [Direction.Left]: 90,
    [Direction.Right]: -90,
  },
  arrow: {
    [Direction.Up]: 90,
    [Direction.Down]: -90,
    [Direction.Left]: 0,
    [Direction.Right]: 180,
  },
};

type RotationMap = {
  [Direction.Up]: number;
  [Direction.Down]: number;
  [Direction.Left]: number;
  [Direction.Right]: number;
};

const styledIcons = Object.keys(icons).reduce((acc, name) => {
  const Icon = icons[name as IconType] || (Alert as AnyStyledComponent);

  const StyledIcon = styled(Icon)(({ theme }) => ({
    display: "block",
    height: "24px",
    width: "24px",
    fill: theme.palette.common.black,
    flexShrink: 0,
    transition: "transform 0.3s",
  }));

  acc[name as IconType] = StyledIcon;

  return acc;
}, {} as typeof icons);

export type IconProps = CmpProps<
  {
    icon: IconType;
    direction?: Direction;
  } & Omit<React.SVGProps<SVGSVGElement>, "ref">
>;

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ icon, direction, ...rest }, ref) => {
  const title = `A(n) ${icon} icon`;
  const rotationMap = customRotations[icon] || defaultRotationMap;
  const IconCmp = styledIcons[icon];

  return (
    <IconCmp
      title={title}
      {...rest}
      transform={direction ? `rotate(${rotationMap[direction]})` : undefined}
      ref={ref}
    />
  );
});
