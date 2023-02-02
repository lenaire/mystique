import React from "react";

export type WizardContextType = {
  activeStep: number;
  completed?: boolean;
};

const WizardContext = React.createContext<WizardContextType | Record<string, unknown>>({});

if (process.env.NODE_ENV !== "production") {
  WizardContext.displayName = "WizardContext";
}

export function useWizardContext(): WizardContextType | Record<string, unknown> {
  return React.useContext(WizardContext);
}

export default WizardContext;
