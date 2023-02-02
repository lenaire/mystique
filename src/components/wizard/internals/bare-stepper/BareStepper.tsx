import { FC, useState, useEffect } from "react";
import { CmpProps } from "$types";
import styled from "styled-components";
import { ImageIcon, ImageIconType } from "$cmp/image-icon/ImageIcon";

const COMPLETED = "CompletedStep";
const ACTIVE = "ActiveStep";
const INCOMPLETED = "IncompleteStep";

export type BareStepType = {
  label: string;
  description: string;
}[];

export interface BareStepperProps extends CmpProps {
  steps: BareStepType;
  activeStep: number;
  width?: string;
  stepHeight?: string;
  nonLinear?: boolean;
  completed?: boolean;
}

export type StepperActivityType = {
  completeOrActiveStep: boolean;
  height?: string;
  lastStep?: boolean;
};

const Container = styled("div")``;

const Step = styled("div")``;

const Description = styled.p`
  display: block;
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  padding: 0 10px;
  margin-left: 12px;
  padding-left: 20px;
  padding-right: 8px;
`;

const StepHeader = styled("div")<{ nonLinear: boolean }>`
  display: flex;
  flex-direction: row;
  cursor: ${(props): string => (props.nonLinear ? "pointer" : "")};
  padding: 8px 0;
`;

// TODO: Typography Component
const StepLabel = styled.span<StepperActivityType>`
  color: ${(props): string =>
    props.completeOrActiveStep
      ? props.theme.palette.secondary.light
      : props.theme.palette.grey[500]};
  padding-left: 10px;
  align-items: center;
  display: flex;
`;

const StepBody = styled("div")<StepperActivityType>`
  ${(props): string =>
    !props.lastStep
      ? `border-left: 2px solid ${
          props.completeOrActiveStep
            ? props.theme.palette.secondary.light
            : props.theme.palette.grey[500]
        }`
      : ""};
  height: ${(props): string => props.height!};
  margin-left: 9px;
`;

const getIconForStep = (
  activeStep: number,
  currentIndex: number,
  completed: boolean
): ImageIconType => {
  const currentStep = currentIndex + 1;

  if (currentStep < activeStep || completed) return COMPLETED;
  if (currentStep === activeStep) return ACTIVE;

  return INCOMPLETED;
};

export const BareStepper: FC<BareStepperProps> = ({
  activeStep = 1,
  nonLinear = false,
  steps,
  className,
  completed = false,
}) => {
  // TODO: Make more customizable...
  const [currentStep, setCurrentStep] = useState(activeStep);

  useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep]);

  return (
    <Container className={className}>
      {steps?.map((step, index) => (
        <Step key={step.label}>
          <StepHeader
            onClick={(): void => {
              if (nonLinear) setCurrentStep(index + 1);
            }}
            nonLinear={nonLinear}
          >
            <ImageIcon image={getIconForStep(currentStep, index, completed)} />
            <StepLabel completeOrActiveStep={index + 1 <= currentStep}>{step.label}</StepLabel>
          </StepHeader>
          <StepBody
            completeOrActiveStep={index + 1 <= currentStep}
            lastStep={index + 1 === steps.length}
          >
            <Description>{step.description}</Description>
          </StepBody>
        </Step>
      ))}
    </Container>
  );
};
