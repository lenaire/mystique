import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Wizard } from "$cmp/wizard/Wizard";
import { useArgs } from "@storybook/client-api";
import styled from "styled-components";
import { Direction } from "$utility/enums";
import { Button } from "$cmp/button/Button";

// Test Build
// TODO:  Accessibility
// Storybook builds integration
// Deploy first version

export default {
  title: "Wizard",
  component: Wizard,
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof Wizard>;

const descriptionOne = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;
const descriptionTwo = `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

const Stepper = styled(Wizard.Stepper)`
  width: 300px;
`;

const Footer = styled(Wizard.Footer)`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const Body = styled.div`
  width: 600px;
`;

const StepContent = styled.div`
  height: 90%;
`;

const Template: ComponentStory<typeof Wizard> = (args) => {
  const [{ activeStep }, updateArgs] = useArgs();
  return (
    <Wizard {...args}>
      <div style={{ display: "flex" }}>
        <Wizard.Header>
          <Stepper
            steps={[
              { label: "Step 1", description: descriptionOne },
              { label: "Step 2", description: descriptionTwo },
              { label: "Step 3", description: "Completed" },
            ]}
          />
        </Wizard.Header>
        <Body>
          <StepContent>
            <Wizard.Step index={1} transition direction={Direction.Left}>
              <p>Step 1</p>
            </Wizard.Step>
            <Wizard.Step index={2} transition direction={Direction.Left}>
              <p>Step 2</p>
            </Wizard.Step>
            <Wizard.Step index={3} transition direction={Direction.Left}>
              <p>Step 3</p>
            </Wizard.Step>
          </StepContent>
          <Footer>
            <Button
              type="primary"
              label="Prev"
              onClick={(): void => updateArgs({ activeStep: activeStep - 1 })}
            />
            <Button
              type="primary"
              label="Next"
              onClick={(): void => {
                updateArgs({ activeStep: activeStep + 1 });
              }}
            />
          </Footer>
        </Body>
      </div>
    </Wizard>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  activeStep: 1,
  totalSteps: 3,
  completed: false,
};
