import { FC, useContext } from "react";
import { BareStepper, BareStepType } from "$cmp/wizard/internals/bare-stepper/BareStepper";
import WizardContext from "$cmp/wizard/internals/context/WizardContext";
import styled from "styled-components";
import { CmpPropsWithChildren } from "$types";

const Container = styled.div``;

export interface StepperProps extends CmpPropsWithChildren {
  steps: BareStepType;
  nonLinear?: boolean;
}

export const Stepper: FC<StepperProps> = ({ nonLinear = false, className, steps }) => {
  const { activeStep, completed } = useContext(WizardContext);
  return (
    <Container className={className}>
      <BareStepper
        activeStep={activeStep as number}
        nonLinear={nonLinear}
        steps={steps}
        completed={completed as boolean}
      />
    </Container>
  );
};
