import type { Meta, StoryObj } from "@storybook/react";

import FormInput from "./FormInput";
import "./FormInput.scss";
import "../../index.scss";

const meta = {
  title: "compoment/FormInput",
  component: FormInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Mail: Story = {
  args: {
    label: "email",
    type: "text",
    placeholder: "email",
    className: "input-field input-bg",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "password",
    className: "input-field input-bg",
  },
};

export const Name: Story = {
  args: {
    label: "Name",
    type: "text",
    placeholder: "Name",
    className: "input-field input-bg",
  },
};
