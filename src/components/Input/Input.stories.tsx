import { components } from "storybook/internal/components";
import MTInput from "./Input";
import { TWColors } from "../../utils/constants";

export default {
  title: "Components/MT/Input",
  component: MTInput,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text", // Allows free text input
    },
    value: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    variant: {
      type: "select",
      options: ["static", "standard", "outlined"],
    },
    size: {
      type: "select",
      options: ["md", "lg"],
    },
    color: {
      type: "select",
      options: TWColors,
    },
    className: {
      control: "text",
    },
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    type: {
      type: "select",
      options: ["text", "password"],
    },
    btnIcon: {
      control: "boolean",
    },
    btnName: {
      control: "text",
    },
  },
};

const Template = (args: any) => <MTInput {...args}></MTInput>;

export const BasicInput = Template.bind({});
