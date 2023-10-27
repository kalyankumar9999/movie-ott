import React from "react";
import { Meta } from "@storybook/react";
import InputComponent from "./inputcomponent";
import { InputComponentProps } from "./inputcomponent";

export default {
  title: "InputComponent",
  Component: InputComponent,
} as Meta;

const Template: React.FC<InputComponentProps> = (args) => (
  <InputComponent {...args} />
);
export const Default = Template.bind({});
(Default as any).args = {
  customPlaceHolder: "Enter something",
  customLabel: "Label",
  customInputType: "text",
};

// Error Case
export const Error = Template.bind({});

(Error as any).args = {
  customPlaceHolder: "Enter something",
  customLabel: "Label",
  customInputType: "text",
  error: "This field is required",
};
