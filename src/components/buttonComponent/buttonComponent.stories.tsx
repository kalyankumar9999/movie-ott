import React from "react";
import { Meta } from "@storybook/react";
import ButtonComponent, { ButtonProps } from "./buttonComponent";

export default {
  component: ButtonComponent,
  title: "ButtonComponent",
} as Meta;

const MyTemplate: React.FC<ButtonProps> = (args) => (
  <ButtonComponent {...args} />
);

export const Custom = MyTemplate.bind({});
(Custom as any).args = {
  backgroundColor: "green",
  buttonText: "Custom Text",
};

