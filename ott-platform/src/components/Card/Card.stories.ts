import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import "./Card.scss";
import "../../index.scss";

const meta = {
  title: "compoment/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    className: "card-primary",
    children: "",
  },
};

export const SignIn: Story = {
  args: {
    className: "card-secondary",
    children: "",
  },
};
