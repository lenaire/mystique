import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    className: { control: { disable: true } },
    onChange: { action: "toggled!" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "This is a toggle",
  defaultValue: true,
};
