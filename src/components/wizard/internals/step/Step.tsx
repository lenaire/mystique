import { FC, useContext } from "react";
import styled, { Keyframes, css, FlattenSimpleInterpolation } from "styled-components";
import { CmpProps } from "$types";
import { Direction } from "$utility/enums";
import { SlideUp, SlideDown, SlideLeft, SlideRight } from "$utility/animations";
import WizardContext from "$cmp/wizard/internals/context/WizardContext";

const TransitionMap = {
  [Direction.Up]: SlideUp,
  [Direction.Down]: SlideDown,
  [Direction.Left]: SlideLeft,
  [Direction.Right]: SlideRight,
};

export interface StepProps extends CmpProps, React.HTMLAttributes<HTMLDivElement> {
  index: number;
  children: React.ReactNode;
  transition?: boolean;
  direction?: Direction;
}

const StepContainer = styled.div<{ active: boolean; transition?: boolean; direction: Direction }>`
  display: ${(props): string => (props.active ? "block" : "none")};
  ${(props): Keyframes | false | FlattenSimpleInterpolation | undefined =>
    props.transition &&
    css`
      animation: ${TransitionMap[props.direction]} 0.5s;
    `};
`;

export const Step: FC<StepProps> = ({
  index,
  className,
  transition,
  direction = Direction.Left,
  children,
}) => {
  const { activeStep } = useContext(WizardContext);
  return (
    <StepContainer
      className={className}
      transition={transition}
      direction={direction}
      active={activeStep === index}
    >
      {children}
    </StepContainer>
  );
};
