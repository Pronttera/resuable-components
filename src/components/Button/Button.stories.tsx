import React from "react";
import ButtonMT from "./Button.tsx";

export default {
  title: "Components/MT/Button",
  component: ButtonMT,
  argTypes: {
    variant: {
      type: "select",
      options: ["filled", "outlined", "gradient", "text"],
    },
    size: {
      type: "select",
      options: ["sm", "md", "lg"],
    },
    label: {
      control: "text", // Allows free text input
    },
    disabled: {
      control: "boolean", // Adds a toggle for true/false
    },
    color: {
      type: "select",
      options: [
        "white",
        "black",
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
      ],
    },
    loading: {
      control: "boolean",
    },
    ripple: {
      control: "boolean",
    },
    className: {
      control: "text",
    },
    handleClick: {
      action: "clicked",
    },
  },
  tags: ["autodocs"],
  args: {
    label: "Click Me!",
    variant: "filled",
    // color: "black",
    // ripple: true,
    // disabled: false,
    // loading: false,
    // size: "md",
  },
  parameters: {
    // docs: {},
  },
};

// export const Filled = () => <ButtonMT label="Filled" variant="filled" />;
// export const Outlined = () => <ButtonMT label="Outlined" variant="outlined" />;
// export const Text = () => <ButtonMT label="Text" variant="text" />;

const Template = (args: any) => <ButtonMT {...args}></ButtonMT>;

export const BasicButton = Template.bind({});
// BasicButton.args = {
//   label: "Click Me!",
//   variant: "filled",
//   color: "black",
//   ripple: true,
//   disabled: false,
//   loading: false,
//   size: "md",
// };
