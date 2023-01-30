import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: { control: { disable: true } },
    onClick: { action: "button clicked" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "primary",
  label: "Button",
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  type: "primary",
  size: "lg",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  type: "secondary",
  size: "sm",
  label: "Button",
};
