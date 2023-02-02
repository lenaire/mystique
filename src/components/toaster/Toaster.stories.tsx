import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "$cmp/button/Button";
import { useToaster } from "./internals/useToaster";
import { Toaster } from "./Toaster";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Toaster",
  component: Toaster,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof Toaster>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toaster> = (args) => {
  const { actions } = useToaster({ duration: 5000 });
  return (
    <div>
      <Button
        type="primary"
        label="Add Toast"
        onClick={(): void => actions.addToast("New Toast")}
      />
      <Toaster {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  portalId: "toasts",
};
