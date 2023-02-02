import renderer from "react-test-renderer";
import { ThemeProvider } from "$cmp/theme-provider/ThemeProvider";
import { Wizard, WizardProps } from "$cmp/wizard/Wizard";
import { Stepper } from "$cmp/wizard/internals/stepper/Stepper";
import { Direction } from "$utility/enums";

describe("<Toaster />", () => {
  it("renders correctly", () => {
    const props: WizardProps = {
      activeStep: 1,
      totalSteps: 2,
      completed: false,
    };

    const tree = renderer
      .create(
        <ThemeProvider>
          <Wizard {...props}>
            <div style={{ display: "flex" }}>
              <Wizard.Header>
                <Stepper
                  steps={[
                    { label: "Step 1", description: "Step 1" },
                    { label: "Step 2", description: "Step 2" },
                    { label: "Step 3", description: "Completed" },
                  ]}
                />
              </Wizard.Header>
              <Wizard.Step index={1} transition direction={Direction.Left}>
                <p>Step 1</p>
              </Wizard.Step>
              <Wizard.Step index={2} transition direction={Direction.Left}>
                <p>Step 2</p>
              </Wizard.Step>
              <Wizard.Step index={3} transition direction={Direction.Left}>
                <p>Step 3</p>
              </Wizard.Step>
            </div>
            <Wizard.Footer>
              Footer
            </Wizard.Footer>
          </Wizard>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
