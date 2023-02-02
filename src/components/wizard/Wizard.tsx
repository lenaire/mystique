import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { CmpPropsWithChildren } from "$types";
import { Stepper } from "$cmp/wizard/internals/stepper/Stepper";
import { Step } from "$cmp/wizard/internals/step/Step";
import { WizardHeader } from "$cmp/wizard/internals/wizard-header/WizardHeader";
import { WizardFooter } from "$cmp/wizard/internals/wizard-footer/WizardFooter";
import WizardContext from "$cmp/wizard/internals/context/WizardContext";

const Container = styled.div``;

const Section = styled.div``;

export interface WizardProps extends CmpPropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  activeStep: number;
  completed?: boolean;
  totalSteps: number;
}

export interface WizardComponent extends FC<WizardProps> {
  Stepper: typeof Stepper;
  Step: typeof Step;
  Header: typeof WizardHeader;
  Footer: typeof WizardFooter;
}

export const Wizard: WizardComponent = ({
  activeStep,
  className,
  completed,
  totalSteps,
  children,
  ...rest
}) => {
  const contextValue = useMemo(
    () => ({
      activeStep,
      completed,
      totalSteps,
    }),
    [activeStep, completed, totalSteps]
  );

  return (
    <WizardContext.Provider value={contextValue}>
      <Container className={className} {...rest}>
        <Section>{children}</Section>
      </Container>
    </WizardContext.Provider>
  );
};

Wizard.Stepper = Stepper;
Wizard.Step = Step;
Wizard.Header = WizardHeader;
Wizard.Footer = WizardFooter;
