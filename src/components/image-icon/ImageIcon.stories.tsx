import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ImageIcon } from "./ImageIcon";

export default {
  title: "ImageIcon",
  component: ImageIcon,
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof ImageIcon>;

const Template: ComponentStory<typeof ImageIcon> = (args) => <ImageIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: "ActiveStep",
};
